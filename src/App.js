import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function List(props) {
  return (
    <ul className="list-group p-3">
      {props.task.map((item,key) => {
        return (
          <div className="list-group-item list-group-item-info" key={item.key}>
            <div className="row li">
              <li 
                key={item.key} 
                className="text-dark col-12"
          >
                {item.text}
                  <button
                    className="btn btn-danger float-right m-2" 
             >
                    Delete
                  </button>
                  <button
                    className="btn btn-danger float-right m-2" 
          >
                    Edit
                  </button>
              </li>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      tasks: []
    };
    this.addTask = this.addTask.bind(this);

  }

  addTask(event, key) {
    if(this.state.edit === false) {
      if (this._inputElement.value !== '') {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };
        this.setState(oldStates => ({
          tasks: oldStates.tasks.concat(newItem)
        }));
        this._inputElement.value = "";
      }
      event.preventDefault();
    }
  }
 
  render() {
    console.log(this.state.tasks);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <form onSubmit={this.addTask} className="d-flex justify-content-center">
          <div className="form-row">
            <div className="col-md-8 ml-5 mb-2">
              <input
                type="text"
                className="form-control form-control-lg border border-dark bg-dark text-white"
                placeholder="Add task"
                ref={(a) => this._inputElement = a}
                onChange={this.valueTyped}
              />
            </div>
            <div className="col-md-2">
              <button
                className="d-block m-auto p-auto btn btn-lg btn-success px-4" 
                type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
        <List
          task={this.state.tasks} 
        />
      </div>
    );
  }
}

export default App;