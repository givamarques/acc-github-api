import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './App.css'

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
        <p>GitSearch </p>
        <strong>Informe o nome do usuário e verifique 
          <br/>quantas contribuições foram realizadas 
          <br/>no GitHub nos últimos anos. {this.props.profile} </strong>
        <div>
          <input type="text" placeholder="Digite aqui o usuário do GitHub" onChange={this.handleTextChange.bind(this)}/>
          {Object.entries(this.state.profile).map((values, key)=>(
            <h4 key={key}><strong>{values[0]}:</strong>{values[1]}</h4>
          ))}
        </div>
      </div>
    )
  }
}

export default App;