import Header from "./components/Header";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex flex-col md:flex-row items-start md:gap-10 md:m-10 md:mx-20 gap-4 m-4 mx-12">
        <Income />
        <Expense />
        <Graph />
      </main>
    </div>
  );
}

export default App;
