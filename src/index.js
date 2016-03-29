//Require React 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyD31qEUgeSRHwwPh5Vw1Fiz_rhuk-q2xic';

// Create a new component. This componet should produce html.
// const means constant it will never change.
//downward data flow, most parent component responsible for getting stuff
class App extends Component {
  //constuctor always gets called with props 
  constructor(props){
  	super(props);

  	this.state = { videos: []};

  	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  		this.setState({ videos }); 
  		//es6 sintax when propname = valuename
	    //same as this.setState({ videos: videos});
    });
  }
  render() {
	return (
		<div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
	    </div>
	);
  }
};


// Render the component generated html and put it in the dom. 
ReactDOM.render(<App />, document.querySelector('.container'));