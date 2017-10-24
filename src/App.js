import React, { Component } from 'react';
import list from './list';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: list
    }
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id){
    console.log('Remove item');

    function isNotId(item){
      return item.objectID !==id;
    }

    const updatedList = this.state.list.filter(isNotId);

    this.setState({list: updatedList});
  }
  render() {

    console.log(this);
    return (
      <div className="App">
      
        {
          // list.map(function(item){
          //   return <div key={item.objectID}>
          //     <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
          //           <p>{item.num_comments} comments | {item.points} points</p>
          //     </div>
          // })

          this.state.list.map(item=>
            <div key={item.objectID}>
              <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
              <h4>{item.num_comments} comments | {item.points} points</h4>
              <button type="button" onClick={ ()=> this.removeItem(item.objectID)}>Remove</button>
            </div>
          )
        }
      
      </div>
    );
  }
}

export default App;
