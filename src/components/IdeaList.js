

import React, {Component} from 'react';
import Idea from './Idea'
import _ from 'lodash';
import  database from '../database';

import { Link } from 'react-router-dom';

class IdeaList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          ideas: []
        };       
      }

      componentDidMount(){
        let app = database.ref('ideas');
        app.on('value', snapshot => {
          this.getData(snapshot.val());
        });
      }


    getData(values){
        let ideasVal = values;
        let ideas = _(ideasVal)
                        .keys()
                        .map(ideasKey => {
                            let cloned = _.clone(ideasVal[ideasKey]);
                            cloned.key = ideasKey;
                            return cloned;
                        })
                        .value();
        this.setState({
            ideas: ideas
        });
    }

    render() {
        let ideasNodes = this.state.ideas.map((idea) => {
            return (
              <div className="card"  key={idea.key}>
                <div className="card-content" >
                  <Idea 
                  title = {idea.title} 
                  category = {idea.category} 
                  detail = {idea.detail}
                  description = {idea.description}
                 />
                </div>
              </div>
            );
          });
      
        return (
            <div>
                <div> {ideasNodes}</div>
                <Link className = " btn btn-primary" to="/ideas/new" >
                    New Idea!
                </Link>
            </div>
        );
    }
}

export default IdeaList;
