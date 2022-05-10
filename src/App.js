import React from 'react';
import './App.css';
import TextButton from './TextButton';

const buttonTextItems = [
  'Bears, beets, battlestar galactica',
  "What's Forrest Gump's password? 1Forrest1",
  'Where do programmers like to hangout? The Foo Bar'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userText: '' };
    this.textInput = React.createRef();
  }

  updateUserText = (e) => {
    this.setState({ userText: e.target.value });
    if (e.target.value === this.state.snippet) {
      const endTime = new Date().getTime() - this.state.startTime;
      this.setState({
        highScore: (
          this.state.highScore
          ? Math.min(this.state.highScore, endTime)
          : endTime
        ),
        victory: true,
        endTime,
      });
    }
  };

  chooseSnippet = (index) => {
    this.setState({
      snippet: buttonTextItems[index],
      startTime: new Date().getTime(),
      userText: '',
      victory: false,
    });
    this.textInput.current.focus();
  };

  render = () => (
    <div className="App">
      <h2>Type Race</h2>
      {this.state.snippet}
      <h4>{
        this.state.highScore
        ? `High Score: ${this.state.highScore}ms`
        : null
      }</h4>
      <h4>{
        this.state.victory
        ? `Done! Woot! Time: ${this.state.endTime}ms`
        : null
      }</h4>
      <input
        value={this.state.userText}
        onChange={this.updateUserText}
        ref={this.textInput}
      />
      <hr />
      {buttonTextItems.map((textItem, index) => (
        <TextButton
          key={textItem}
          buttonText={textItem}
          onClick={() => this.chooseSnippet(index)}
        />
      ))}
    </div>
  );
}

export default App;
