//Require React 
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD31qEUgeSRHwwPh5Vw1Fiz_rhuk-q2xic';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});


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