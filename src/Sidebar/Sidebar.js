import React from 'react';

import shortid from 'shortid';
import './Sidebar.css';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

class Sidebar extends React.Component {
    state = { 
        lists: [
            {
                name: 'test-item',
                id: '21312'
            },
            {
                name: 'test-item2',
                id: '21323112'
            }
        ],
        listInput: ''
    }

    handleInput = e => {
        this.setState({
            listInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            lists: [...this.state.lists, {
                name: this.state.listInput,
                id: shortid.generate()
            }],
            listInput: ''
        })
    }

    setListId = (id) => {
        this.props.setListId(id)
    }

    componentDidUpdate() {
        // localStorage.setItem('lists', (JSON.stringify(this.state.lists)))
    }

    componentDidMount() {
        // this.setState({
        //     lists: JSON.parse(localStorage.getItem('lists'))
        //  })
    }

    render() { 
        
        return ( 
            <div className='sidebar'>
                <h1>Linkr</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.listInput}
                    onChange={this.handleInput}
                    className='input-list'
                    placeholder='add link-list'/>
                </form>
                

                <div className='lists'>
                    {this.state.lists.map(listItem => {
                        return <p onClick={() => this.setListId(listItem.id)} key={listItem.id}>{listItem.name}</p>
                    })}
                </div>
            </div>
         );
    }
}
 
export default Sidebar;