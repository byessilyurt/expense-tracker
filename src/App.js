import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <Button
        text="Click me"
        onClick={() => alert("Hello world!")}
        type="button"
      />
      <Input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
