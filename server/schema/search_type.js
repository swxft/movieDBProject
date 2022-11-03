const SearchResult = require("./search_result");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const SearchType = new GraphQLObjectType({
  name: "SearchType",
  fields: {
    totalResults: {
      type: GraphQLInt,
      resolve: (result) => result.totalResults,
    },
    movies: {
      type: GraphQLList(SearchResult),
      resolve: (result) => result.Search,
    },
  },
});

module.exports = SearchType;


/* 
query:
getMovies(apiKey, 'elf') {
  search {
    movies
  }
}

*/
