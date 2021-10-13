import { client } from './sevices/client';
import UsersList from './containers/users_list';
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>tchauuu</h1>
        <UsersList />
      </div>
    </ApolloProvider>
  );
}

export default App;
