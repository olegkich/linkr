import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: {
          name: 'main list',
          id: 'main'
        }
      }
    }

  setList = (list) => {
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div className="App">
          <Sidebar setList={this.setList}/>
          <Main list={this.state.list}/>
      </div>
    );
  }
}

export default App;