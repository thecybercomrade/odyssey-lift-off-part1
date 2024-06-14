const gql = require("graphql-tag");

const typeDefs = gql`
"A Track is a group of modules that teaches about specific topic"
    type Query {
        tracksForHome: [Track!]!
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;