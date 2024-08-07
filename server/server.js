
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoute');
const courseRoutes = require('./routes/courseRoute');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURL).then(()=>{
    console.log("db connected")
    app.listen(PORT, () => {
        console.log("server running")
    })
}).catch((error) => console.log(error));


app.get('/', (req, res) => {
    res.send("hello world")
});

app.use("/api", userRoutes)
app.use("/api", courseRoutes)
