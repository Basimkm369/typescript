import React, { Component } from 'react';

type State={
  count:number
}

export default class Class extends Component<{},State> {
  state:State = {
    count: 0,
  };



  handleClick =()=>{
    this.setState((preState)=>({count:preState.count+1}))
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
