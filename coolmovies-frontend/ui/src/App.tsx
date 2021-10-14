import { client } from './sevices/client';
import UsersList from './containers/users_list';
import ReviewForm from './containers/review_form';
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>tchauuu</h1>
        <UsersList />
        <ReviewForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
