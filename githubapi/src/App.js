import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component{
  state = {
    profile:{}

  }
  handleTextChange(e){
    fetch(`https://api.github.com/users/${e.target.value}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        profile:res
      })
    })
  }
  render(){
    return(
      <div>
        <strong>Olá, {this.props.profile} </strong>
        <div>
          Digite User: <input type="text" onChange={this.handleTextChange.bind(this)}/>
          {Object.entries(this.state.profile).map((values, key)=>(
            <h2 key={key}><strong>{values[0]}:</strong>{values[1]}</h2>
          ))}
        </div>
      </div>
    )
  }
}

export default App;