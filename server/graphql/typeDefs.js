const {gql} = require('apollo-server')

const typeDefs = gql`
    # "Users that log in and out"
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    # "A given collection of flash cards"
    type Subject{
        id: ID!
        title: String!
        # "this acts as the list of questions and answers"
        flashCards: [FlashCard]
        flashCardCount:  Int
    }
    # "One individual flash card, with one question and one answer"
    type FlashCard{
        id:ID!
        question: String!
        answer: String!
    }
    type Query{
        getSubjects: [Subject]
        getSubject(postID: ID!): Subject
    }
    # different kind of "type", given as an input to a resolver for it to return something
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
    }

`
module.exports = typeDefs;