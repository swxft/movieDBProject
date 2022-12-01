import React, {useEffect, useState} from "react";
import Nominations from './components/Nominations';
import Search from "./components/Search";
import Results from "./components/Results";
import { fetchGraphQL } from './util/fetchGraphQL';

export default function App() {
  const state = useState([]);
  const results = state[0];
  const setResults = state[1];

  const nomListState = useState([]);
  const nomListItems = nomListState[0];
  const setnomListItems = nomListState[1];

  // on mount, run once
  useEffect(() => {
    getResults();
  }, []);


  function getResults() {
    fetchGraphQL(`
    query {
      search(searchTerm: "elf") {
        totalResults
        movies {
          title
          year
          imdbID
        }
      }
    }
    `).then((jsonObject) => {
      setResults(jsonObject.data.search.movies)
    });
  }

  return (
    <>
    {/* <Nominations nomListItems={nomListItems} /> */}
    <Results results={results}/>
    </>
  );
}
