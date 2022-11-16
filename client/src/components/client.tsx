import React from "react";
import ReactDom from "react-dom";
import App from "../App";
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Results from "./Results";

  const fetcher = createGraphiQLFetcher({
      url: 'http://localhost:3000/graphql',
    });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/debug",
      element: <GraphiQL fetcher={fetcher} />,
    },
    {
      path: "/search/:searchTerm",
      element: <Results/>,
    },
  ]);



const appContainer = document.getElementById('root');
ReactDom.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    appContainer
);

