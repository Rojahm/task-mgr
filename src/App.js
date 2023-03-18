import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <div className="container border mt-4 shadow-sm rounded">
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
