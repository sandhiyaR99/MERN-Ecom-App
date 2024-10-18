import express from "express"
import cors from "cors"
import { MongoClient, ObjectId } from "mongodb"

import dotenv from "dotenv"

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const client = new MongoClient(process.env.MONGO_URI)

let ProductCollection;
let CartCollection;

const main = async () => {
    await client.connect().then(console.log("connected with MongoDB")).catch(err => console.log(err))
    ProductCollection = client.db("projectdatabase").collection("products")
    CartCollection = client.db("projectdatabase").collection("carts")
}

app.get("/products", async (req, res) => {
    const products = await ProductCollection.find().toArray()
    res.status(200).json(products)
})

app.post("/products", async (req, res) => {
    const newproduct = req.body;
    const result = await ProductCollection.insertOne(newproduct);
    res.status(200).json(result);
});

app.get("/cart", async (req, res) => {
    const cartItems = await CartCollection.find().toArray();
    res.status(200).json(cartItems);
});

app.post("/cart", async (req, res) => {
    const cartItem = req.body;
    const result = await CartCollection.insertOne(cartItem);
    res.status(201).json(result);
});

app.put("/cart/:id", async (req, res) => {
    const { id } = req.params;
    const updatedCartItem = req.body;
    const result = await CartCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedCartItem }
    );
    res.status(200).json(result);
});

app.delete("/cart/:id", async (req, res) => {
    const { id } = req.params;
    const result = await CartCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).json(result);
});

app.delete("/cart", async (req, res) => {
    const result = await CartCollection.deleteMany({});
    res.status(200).json(result);
});

const StartedServer = async () => {
    await main()
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    })
}
StartedServer()
