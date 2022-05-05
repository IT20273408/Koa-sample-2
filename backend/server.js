const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');const json = require('koa-json');
//const path = require('path');
//const render = require('koa-ejs');
const dotenv = require('dotenv');
require("dotenv").config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3660 ;

const URL = "mongodb+srv://gayuni:Jayathmi@backend.4q0yn.mongodb.net/test" ;

const router = new KoaRouter();

const app = new Koa();

app.use(bodyParser());

app .use(cors());

app.use(router.routes());

mongoose.connect(URL, {

    useNewUrlParser: true,

    useUnifiedTopology: true

});

//mongodb connection

const connection = mongoose.connection;
connection.once("open", () => {
console.log("MongoDb connection success!");

});

const customerRouter = require("./route/customers.js");
app.use(customerRouter.routes());

//listen to the port

app.listen(PORT, () =>{ 
console.log(`Server is up and running in port no : `+PORT);

});

