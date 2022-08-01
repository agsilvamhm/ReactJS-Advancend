import React, {Component} from 'react';

class Twitter extends Component{


  componentDidMount(){
    const { posts } = this.props
    console.log('componetDidMount', posts)
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