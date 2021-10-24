import { MongoClient } from "mongodb";

const existingOrders = [
    {   
        id: 1,
        description: 'Construction Materials',
        revenue: 4200,
        cost: 100
    },

    {
        id: 2,
        description: 'Construction Materials',
        revenue: 3948.45,
        cost: 71.38
    },

    {
        id: 3,
        description: 'Wood and Lumber',
        revenue: 1950.52,
        cost: 263.88
    },

    {
        id: 4,
        description: 'Wood and Lumber',
        revenue: 4991.45,
        cost: 116.98
    },

    {
        id: 5,
        description: 'Meat',
        revenue: 6739.72,
        cost: 279.17
    },

    {
        id: 6,
        description: 'Meat',
        revenue: 3618.08,
        cost: 537.91
    },

    {
        id: 7,
        description: 'Fresh Produce',
        revenue: 5345.91,
        cost: 420.69
    },

    {
        id: 8,
        description: 'Farm Supplies',
        revenue: 7429.78,
        cost: 171.13
    },

    {
        id: 9,
        description: 'Cheetos',
        revenue: 7231.98,
        cost: 310.38
    },

    {
        id: 10,
        description: 'Rose Rocket Swag Shirts',
        revenue: 5404.24,
        cost: 350.79
    }
]

const existingDrivers = [
    {name: 'Steve Williams'}, 
    {name: 'Chris Horton'},
    {name: 'Alex Novak'}
];

async function main() {
    const uri = "mongodb+srv://roserocket:roserocket@cluster0.cl33w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try { 
        await client.connect();   

        await insertOrders(client, existingOrders);
        await insertDrivers(client, existingDrivers)
    } catch (e) {
        console.error(e);
    } finally {
        await client.close()
    }
}

main().catch(console.error);

// function to store given orders to mongodb
async function insertOrders(client, existingOrders) {
    const result = await client.db("roserocket").collection("orders").insertMany(existingOrders);

    console.log(`New listing: ${result.insertedCount}`)
    console.log(result.insertedIds)
}

//function to store given drivers to mongodb
async function insertDrivers(client, existingDrivers) {
    const result = await client.db("roserocket").collection("drivers").insertMany(existingDrivers);

    console.log(`New listing: ${result.insertedCount}`)
    console.log(result.insertedIds)
}

// function to get databases from mongodb
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases()

    console.log("databases");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}

exports.orders = (req, res) => {
    res.json(existingDrivers)
}