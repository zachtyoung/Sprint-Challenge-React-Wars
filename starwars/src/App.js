import React, {useState, useEffect} from "react";
import './App.css';
import { Something} from "./components/something"
import Grid from 'react-css-grid'
const axios = require('axios');

let swapiAPI = 'https://swapi.co/api/people/'


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
function App() {
  let [API] = useState(swapiAPI);
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(API)
    .then(res => {
      setContent(res.data.results);

    })
    .catch(e => {
      console.log(e)
    });
  }, [API]);

let name = content[0];
  return (
    <div className="App">
      <div className="jedi-wrap">
      {content !== ''? <Something jedi={content}/>: console.log("Loading...") }
      </div>
    </div>
  );
}
export default App;
