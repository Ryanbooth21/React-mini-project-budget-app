import React, { Component } from 'react';
import './App.css';
import Budgetform from './Components/Budget_form'
import Title from './Components/Title'
import Results from './Components/Results'
class App extends Component {
  constructor(){
    super()
    this.state = ({
      Income: 0,
      Housing: 0,
      Groceries: 125,
      cellphone: 11,
      Travel: 0,
      Invest: 0,
    })
    this.collectForm = this.collectForm.bind(this)
  }
  collectForm(e){
    e.preventDefault(e)
    this.setState({
      Income: parseInt(e.target.value),
      Housing: parseInt(e.target.value * .25),
      Travel:  parseInt(e.target.value * .10),
      Invest:  parseInt(e.target.value * .15),
    })
  }


render(){
    return (
    <div>
      <Title />
      <Budgetform Income={this.state.Income} collectForm={this.collectForm}/>
      <Results
      Income={this.state.Income}
      Housing={this.state.Housing}
      Groceries={this.state.Groceries}
      Travel={this.state.Travel}
      Invest={this.state.Invest}
      Cellphone={this.state.cellphone}
       />
    </div>
    )
  }
}


export default App;
