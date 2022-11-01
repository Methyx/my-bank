import "./App.css";

import transactions from "./transactions.json";

import Header from "./components/Header";
import Accounts from "./components/Accounts";

function App() {
  return (
    <div className="App">
      <Header userName="Philippe MERCY" />
      <Accounts transactionsArray={transactions} />
      <footer></footer>
    </div>
  );
}

export default App;
