const {gql} = require('apollo-server')

const typeDefs = gql`
    "Users that log in an out"
    type User{
        id: ID!
        username: String!
        token: String!
        password: String!
        createdAt: String!
    }
    "The needed form to create a user or login"
    type RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    "A given collection of flash cards"
    type Subject{
        id: ID!
        title: String!
        "this acts as the list of questions and answers"
        flashCards: [FlashCard]
        flashCardCount:  Int
    }
    "One individual flash card, with one question and one answer"
    type FlashCard{
        "Do I really need an ID for each flash card?"
        id:ID!
        question: String!
        answer: String!
    }
    type Query{
        getSubjects: [Subject]
        getSubject(postID: ID!): Subject
    }
`
module.exports = typeDefs;