import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'GeekTech',
      age: 99
    };
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange() {
    this.setState({
      name: 'Abdulla',
      age: 20
    }
      
    );
  }
  render() {
    return (
      <div className="App">
       <button onClick ={this.handleChange}>нажми на меня</button>
       <p>name:  {this.state.name}</p>
       <p>age: {this.state.age}</p>
      </div>
    );
  
}
  
}

export default App;
