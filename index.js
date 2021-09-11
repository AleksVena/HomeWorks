const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const depthLimit = require('graphql-depth-limit')

const schema = require('./src/schema');

const mongoose = require('mongoose')
const mongooseConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const app = express()
const port = 3000
app.use('/',
    graphqlHTTP({
        schema: schema,
        validationRules: [depthLimit(4)],
        graphiql: true,
    })
)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0.wblfv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', mongooseConnectOptions)
            //console.log(mongoose.);
        app.listen(port, () => {
            console.log('GraphQL API server running at localhost: ' + port)
        })
    } catch (e) {
        console.log('mondb not connected');
        console.log(e)
    }
}

start()