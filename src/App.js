import './App.css';
import Dictionary from './Dictionary.js'

function App() {
  return (
    <div className="container">
      <header className="App-header text-center">
        Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>
      <small className="App-footer text-center">
        This app was coded by Marie Lamoureux
      </small>
    </div>
  );
}

export default App;
