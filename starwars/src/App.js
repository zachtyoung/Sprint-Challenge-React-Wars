import React, {useState, useEffect} from "react";
import './App.css';
import { Something} from "./components/something"
import styled from 'styled-components';
import Grid from 'react-css-grid'
const axios = require('axios');

let swapiAPI = 'https://swapi.co/api/people/'

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const NewStyle = styled.div`
      display: grid;
      grid-template-columns: max-content max-content max-content;
      grid-template-rows: auto;
      grid-column-gap: 5em;
      grid-row-gap: 2em;
      width: max-content;
      margin: 0 auto;
  `;


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


  return (
    <div className="App">
      <NewStyle>
      {content !== ''? <Something jedi={content}/>: console.log("Loading...") }
      </NewStyle>
    </div>
  );
}
export default App;

