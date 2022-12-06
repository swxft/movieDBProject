import React, {useEffect, useState} from "react";
import Nominations from './components/Nominations';
import Search from "./components/Search";
import Results from "./components/Results";
import useStateLS from "./util/useStatewithLocalStorage";
import { fetchGraphQL } from './util/fetchGraphQL';
// import { ListItem } from "@material-ui/core";

export default function App() {
  const [results, setResults] = useStateLS([], 'results');

  const [nomListItems,  setNomListItems] = useStateLS([], 'nominations');

  function getResults(userQuery) {
    console.log(userQuery)
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
      if (jsonObject.data.search.movies == null) {
        setResults([])

      } else {
        setResults(jsonObject.data.search.movies)
      }
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
      return item.imdbID !== element.imdbID
    })

    setNomListItems(removeItemList)
  }

  return (
    <>
    <Search onSearch={onSearch}/>
    <Results results={results} onAddNom={onAddNom} nomListItems={nomListItems}/>
    <Nominations nomListItems={nomListItems} onRemoveNom={onRemoveNom}/>
    </>
  );
}
