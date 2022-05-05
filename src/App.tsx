import "./App.css";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div>
      <Alert text="Hello World!!!" props="error" />
      <Alert text="Hello World!!!" props="warning" />
      <Alert text="Hello World!!!" props="success" />
    </div>
  );
}

export default App;
