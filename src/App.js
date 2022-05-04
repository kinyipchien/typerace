import React from 'react';
import './App.css';
import TextButton from './TextButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.buttonTextItems = ['Click Me!', 'No Me!', 'Please no clicky'];
  }

  render() {
    return (
      <div className="App">
        <h2>Type Race</h2>
        <input />
        <hr />
        {this.buttonTextItems.map((textItem) => <TextButton buttonText={textItem} />)}
      </div>
    );
  }
}

export default App;
