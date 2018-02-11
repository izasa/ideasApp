import React, {Component} from 'react';

class Idea extends Component {
    
  render(){
    return (
      <div>
        title: {this.props.title}   category: {this.props.category}
      </div>
    );
  }
}
export default Idea;