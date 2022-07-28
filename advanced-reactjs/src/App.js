import React, {Component} from 'react';

class Twitter extends Component{

  componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componetDidMount')
  }

   render(){
    return (
      <div>
        teste
      </div>
    )
   }
}

export default Twitter;