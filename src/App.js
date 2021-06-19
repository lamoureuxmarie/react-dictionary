import './App.css';
import Dictionary from './Dictionary.js'
import smiley from './distorted-smile.png'
import background from './background-img.jpg'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
 
    <div className="container" style={{ 
      backgroundImage: `url(${background})`
       }}>
      <header className="App-header text-center mt-5 mb-4">
        <img src={smiley} className="smiley" />       
        <h1 className="text-center">
        Dictionary app
        </h1>
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
