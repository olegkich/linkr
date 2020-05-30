import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Main from './App/Main';
import shortid from 'shortid'

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Main listName='Main List' listId={shortid.generate()}/>
    </div>
  );
}

export default App;
