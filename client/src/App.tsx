import React, {useEffect, useState} from "react";
import Nominations from './components/Nominations';
import Search from "./components/Search";
import Results from "./components/Results";
import { fetchGraphQL } from './util/fetchGraphQL';

export default function App() {
  const [a, b] = useState();
  // on mount
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
      console.log(jsonObject)

    });
  }

  return (
    <>
    <Search />
    <Nominations />
    <Results results={undefined} />
    </>
  );
}
