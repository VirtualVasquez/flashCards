const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        getSubjects: () => new MockList([6, 9]),
    }),
    Subject: () => ({
        id: () => 'subject_01',
        title: () => "Biology",
        flashCards: () => [],
        flashCardCount: () => 0
    })
}
const server = new ApolloServer({
    typeDefs,
    mocks
})

server.listen().then(() =>{
    console.log(`
        Server is running!
        Listening on port 4000
        Query at https://studio.apollographql.com/dev
    `)
}) 