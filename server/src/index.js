const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');
const mongoose = require('mongoose'); //let's us interact with mongoDB

const Subject = require('../models/subject.js')
const {MONGODB} = require('../config.js');

// const mocks = {
//     Query: () => ({
//         getSubjects: () => new MockList([6, 9]),
//     }),
//     Subject: () => ({
//         id: () => 'subject_01',
//         title: () => "Biology",
//         flashCards: () => [],
//         flashCardCount: () => 0
//     })s
// }

const resolvers = {
    Query:{
        async getSubjects(){
            try{
                const subjects = await Subject.find()
                return subjects
            } catch(err) {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
    // mocks
})

//need to connect to DB BEFORE starting server
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(()=>{
        console.log(`
            MongoDB connected
            Server is running!
            Listening on port 4000
            Query at https://studio.apollographql.com/dev
        `)
        return server.listen({port:4000});
    })