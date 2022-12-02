import React, {useEffect, useState} from "react";
import Nominations from './components/Nominations';
import Search from "./components/Search";
import Results from "./components/Results";
import { fetchGraphQL } from './util/fetchGraphQL';
import { ListItem } from "@material-ui/core";

export default function App() {
  const state = useState([]);
  const results = state[0];
  const setResults = state[1];

  const [nomListItems,  setNomListItems] = useState([]);
  

  // on mount, run once
  useEffect(() => {
    getResults("elf");
  }, []);


  function getResults(userQuery) {
    fetchGraphQL(`
    query {
      search(searchTerm: "${userQuery}") {
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

  function onSearch(userQuery) {
    getResults(userQuery);
  }

  function onAddNom(result) {
    setNomListItems([...nomListItems, result]);
  }

  function onRemoveNom(element) {
    const removeItemList = nomListItems.filter((item) => {
      item.imdbID !== element.imdbID
    })
    setNomListItems(removeItemList)
  }
  // const maxNomsReached = nomListItems >= 5

  return (
    <>
    <Search onSearch={onSearch}/>
    <Results results={results} onAddNom={onAddNom}/>
    <Nominations nomListItems={nomListItems} onRemoveNom={onRemoveNom}/>
    </>
  );
}
