import './App.css';
import Dictionary from './Dictionary.js'
import smiley from './images/smiley-face.png'
import background from './images/background-neonyellow.jpg'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
 
    <div className="container" style={{ 
      backgroundImage: `url(${background})`
       }}>
      <header className="App-header text-center mt-5 mb-4">
        <img src={smiley} className="smiley" alt="smiley-face"/>       
        <h1 className="text-center">
        Dictionary app
        </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="hello" />
      </main>
    <footer className="text-center mt-5 mb-5">
    Open-source code by{" "}
    <a className="git-link" hRef="https://github.com/lamoureuxmarie/react-dictionary" Target="_blank" >Marie Lamoureux</a>
    </footer>
    </div>
   
  );
}

export default App;
