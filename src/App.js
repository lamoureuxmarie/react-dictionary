import './App.css';
import Dictionary from './Dictionary.js'

function App() {
  return (
 
    <div className="container">
        <Dictionary defaultKeyword="Dictionary" />
    <footer className="text-center mt-5 mb-5">
    Open-source{" "}<a className="git-link" href="https://github.com/lamoureuxmarie/react-dictionary" target="_blank" >code</a> by{" "}
    <a className="git-link" href="https://marielamoureux.com" target="_blank" >Marie Lamoureux</a>
    </footer>
    </div>
   
  );
}

export default App;
