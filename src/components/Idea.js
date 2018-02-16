import React, {Component} from 'react';

class Idea extends Component {
    
  render(){
    return (
      <div>
        <div>
          title: {this.props.title}   category: {this.props.category}
        </div>
        <div>
          category: {this.props.category}
        </div>
        <div>
          description: {this.props.description}
        </div>
        <div>
          detail: {this.props.detail}
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default Idea;