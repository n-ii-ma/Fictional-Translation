import TextArea from "../components/TextArea";
import Translation from "../features/translation/Translation";
import "../App.css";

function App() {
  return (
    <div className="App">
      <h1>Translate Your Sentences to Some of the Most Famous Languages</h1>
      <TextArea />
      <Translation />
    </div>
  );
}

export default App;
