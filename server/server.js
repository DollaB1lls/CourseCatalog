
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURL).then(()=>{
    console.log("db conncted")
    app.listen(PORT, () => {
        console.log("server running")
    })
}).catch((error) => console.log(error));


const courseSchema = new mongoose.Schema({
    prefix: String,
    course_number: String,
    course_name: String,
    description: String,
});

const CourseModel = mongoose.model("cosccourses", courseSchema)

app.get("/getCourses", async(req, res)=>{
    const courseData = await CourseModel.find();
    res.json(courseData); 
});


app.get('/', (req, res) => {
    res.send("hello world")
});

// app.get('/api', (req, res) => {
//     res.send("sent from API")
// });
 

app.use("/api", userRoutes)
