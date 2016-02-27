//Require React 
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD31qEUgeSRHwwPh5Vw1Fiz_rhuk-q2xic';


// Create a new component. This componet should produce html.
// const means constant it will never change.
const App = () => {
	return (
		<div>
          <SearchBar />
	    </div>
	);
}


// Render the component generated html and put it in the dom. 
ReactDOM.render(<App />, document.querySelector('.container'));