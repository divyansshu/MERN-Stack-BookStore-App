import 'dotenv/config'
import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import bookRouter from "./routes/bookRouter.js";

//middleware for parsing request body
const app = express();

//middleware for handling cors policy
// OPTION 1: allow all origins with default of cors(*);
app.use(cors());

// OPTION 2: allow custom origins
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:["GET, POST, PUT, DELETE"],
//     allowedHeaders:["content-type"]
// }));

app.use(express.json());

app.use("/books", bookRouter);

const port = process.env.PORT;

connect(process.env.MONGODB_URI).then(() => {
    console.log("mongodb connected");
}).catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => {
    return res.status(234).send('Welcome To BookStore');
});


app.listen(port, () => {
    console.log(`server started on port ${port}`);
});