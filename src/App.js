import Header from "./components/Header";
import Income from "./components/Income";
import Expense from "./components/Expense";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex md:flex-col items-start gap-10 mt-10 mx-20">
        <Income />
        <Expense />
      </main>
    </div>
  );
}

export default App;
