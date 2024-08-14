
const {MongoClient} = require("mongodb")
const uri = require("./atlas_uri")


const mongoose = require('mongoose');

const client = new MongoClient = new MongoClient(uri)
const dbname = "bank"


const connectDB = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting ${err}');
  }
};

const main = async () => {
  try {
    await connectDB();
  } catch(err) {
    console.error("Error connecting")
  } finally {
    await client.close();
  }
};

main();
//module.exports = connectDB;
