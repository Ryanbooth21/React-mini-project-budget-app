import React from 'react'

class Budgetform extends React.Component{
  render(){
    return(
      <div>
        <form>
          Enter Income: <input type="number" onChange={this.props.collectForm} value={this.props.Income} /><br/>
        </form>
      </div>
    )
  }
}

export default Budgetform
