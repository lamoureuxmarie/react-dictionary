import './App.css';
import Dictionary from './Dictionary.js'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './images/logo-marie-blc.png';

function App() {
  return (
 
    <div className="container">
      <header className="App-header text-center mt-5 mb-4">      
        <h1 className="text-center">
        <em>Dictionary</em> App
        </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
    <footer className="text-center mt-5 mb-5">
    Open-source{" "}<a className="git-link" hRef="https://github.com/lamoureuxmarie/react-dictionary" Target="_blank" >code</a> by{" "}
    <a className="git-link" hRef="https://marielamoureux.com" Target="_blank" ><img src={Logo} /></a>
    </footer>
    </div>
   
  );
}

export default App;
