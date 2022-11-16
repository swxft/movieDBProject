import { HelpOutline } from "@material-ui/icons";

export async function fetchGraphQL(graphqlQuery) {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: graphqlQuery,
    }),
  });
  return response.json();
}

// hello
// world
// hi

// hello
// hi
// world
