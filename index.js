import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//we are going to use JSON data
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
