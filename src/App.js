import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Main from './App/Main';
import shortid from 'shortid'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listId: 'main'
    }
  }

  setListId = (id) => {
    this.setState({
      listId: id
    })
  }

  render() {
    return (
      <div className="App">
          <Sidebar setListId={() => this.setListId()}/>
          <Main listName='Main List' listId={this.state.listId}/>
      </div>
    );
  }
}

export default App;
