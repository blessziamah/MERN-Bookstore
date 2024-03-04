import express, {response} from "express"
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express()

app.use(express.json())

// app.use(cors())

app.use(cors({
	origin: "http://localhost:5000",
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type']
}))

app.get('/', (req, res) => {
	console.log(req)
	return res.status(234).send("Homepage")
})

app.use('/books', booksRoute)




mongoose.connect(mongoDBURL).then(() => {
	console.log("App connected to database")
	app.listen(PORT, () => {
	console.log("App working")
});

}).catch((error) => {
	console.log(error)
})