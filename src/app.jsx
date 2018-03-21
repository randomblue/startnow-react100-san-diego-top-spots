import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        topspots: []
    }
    
  }

  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }


  render() {
    return (
  <div className='container'>

      <div className='App'>
              
        <div className='card'>   
          
            <h1 className='card-header text-center'> San Diego Top Spots!</h1>
           <p className='card-text text-center'> A list of 30 places to see in San Diego, California</p>  
          
        </div>
      
      
      <div>
        <ul className='p-0'>

          {
              this.state.topspots.map(topspot => (
                  <TopSpot
                      key={topspot.id}
                      name={topspot.name}
                      description={topspot.description}
                      location={topspot.location} />
              ))
          }
        
        

        </ul>
      </div>
        {/* <div className='card mt-3'>
            <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
        </div> */}
      </div>

    </div>

    );
  }
}

export default App;
