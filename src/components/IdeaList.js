import React, {Component} from 'react';
import Idea from './Idea'
import _ from 'lodash';
import firebase from 'firebase';
import  database from '../database';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';


import NewIdea from './NewIdea';
import reducers from '../reducers';

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
              <div className="card"  key={idea.detail}>
                <div className="card-content" >
                  <Idea 
                  title = {idea.title} 
                  category = {idea.category} 
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