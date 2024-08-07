

const express = require('express');
const { createUser, getAllUsers, getUserByID, getUserByName } = require('../controller/userController');

const route = express.Router();

route.post("/createUser", createUser)
route.get("/getAllUsers", getAllUsers)
route.get("/user/:id", getUserByID)
route.get("/getUser/:name", getUserByName)

module.exports = route;