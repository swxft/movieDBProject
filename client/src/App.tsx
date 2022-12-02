import React, {useEffect, useState} from "react";
import Nominations from './components/Nominations';
import Search from "./components/Search";
import Results from "./components/Results";
import { fetchGraphQL } from './util/fetchGraphQL';

export default function App() {
  const state = useState([]);
  const results = state[0];
  const setResults = state[1];

  const [nomListItems,  setNomListItems] = useState([]);
  

  // on mount, run once
  useEffect(() => {
    getResults("elf");
  }, []);


  function getResults(keyword) {
    fetchGraphQL(`
    query {
      search(searchTerm: "${keyword}") {
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

  function onSearch(keyword) {
    console.log("onSearch", keyword)
    getResults(keyword);
  }

  function onAddFav(result) {
    console.log("onAddFav", result);
    var list = [...nomListItems];
    list.push(result);
    setNomListItems(list);

    console.log("list", list);
  }

  return (
    <>
    <Search onSearch={onSearch}/>
    {/* <Nominations nomListItems={nomListItems} /> */}
    <Results results={results} onAddFav={onAddFav}/>
    <Nominations nomListItems={nomListItems} />
    </>
  );
}
