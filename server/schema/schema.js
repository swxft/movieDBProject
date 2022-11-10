const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const fetch = require("node-fetch");
const SearchType = require("./search_type");
const MovieType = require("./movie_type");

const url = "http://www.omdbapi.com/?apikey=";
const apiKey = '7574ca10'
function fetchSearch(searchTerm) {
  return fetch(`${url}${apiKey}&s=${searchTerm}`).then(res => {
    return res.json();
  });
}

function fetchMovie(id) {
  return fetch(`${url}${apiKey}&i=${id}`).then(res => {
    return res.json();
  });
}

const queryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    search: {
      type: SearchType,
      args: {
        searchTerm: { type: GraphQLString },
        // more...
      },
      resolve: (root, args) => fetchSearch(args.searchTerm),
    },
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
        // more...
      },
      resolve: (root, args) => fetchMovie(args.id),
    },
  },
});

const omdbSchema = new GraphQLSchema({
  query: queryType,
});

module.exports = omdbSchema;
