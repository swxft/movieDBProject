import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import 'graphiql/graphiql.css';

const fetcher = createGraphiQLFetcher({
    url: 'http://localhost:3000/graphql',
  });


const appContainer = document.getElementById('root');
ReactDom.render(
    <GraphiQL fetcher={fetcher} />,
    appContainer,
);
