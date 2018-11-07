import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <iframe title='hey' width="560" height="315" src="https://www.youtube.com/embed/jwlHiOc3jHQ" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
