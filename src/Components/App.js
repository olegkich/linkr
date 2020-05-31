import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: {
          name: 'none',
          id: 'home'
        },
        links: []
      }

      if(this.state.links === null) {
        localStorage.setItem('links', JSON.stringify(this.state.links))
      }
    }

  addLink = link => {
      this.setState({
          links: [...this.state.links, link],
      })
  }

  deleteLink = id => {
      this.setState({
          links: this.state.links.filter(linkItem => linkItem.id !== id)
      })
  }

  setList = (list) => {
    this.setState({
      list: list
    })
  }

  componentDidUpdate() {
      localStorage.setItem('links', JSON.stringify(this.state.links))
  }

  componentDidMount() {
    if (localStorage.getItem('links') != null) {
        this.setState({
          links: JSON.parse(localStorage.getItem('links')),
        })
    }
    
  }

  render() {
    return (
      <div className="App">
          <Sidebar setList={this.setList}/>
          <Main deleteLink={this.deleteLink} addLink={this.addLink}
          links={this.state.links.filter(linkItem => linkItem.listId === this.state.list.id)}
          list={this.state.list}/>
      </div>
    );
  }
}

export default App;