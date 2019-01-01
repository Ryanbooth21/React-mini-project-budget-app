import React from 'react'

class Results extends React.Component{
  render(){
    return(
      <div>
        <h3>Income:  ${this.props.Income}</h3>
        <h4>Groceries: ${this.props.Groceries}</h4>
        <h4>Housing: ${this.props.Housing}</h4>
        <h4>Invest: ${this.props.Invest}</h4>
        <h4>Travel and Climbing: ${this.props.Travel}</h4>
        <h4>Cellphone: ${this.props.Cellphone}</h4>
      </div>
    )
  }
}

export default Results
