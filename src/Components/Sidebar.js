import React from 'react';

import shortid from 'shortid';
import './css/Sidebar.css';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            lists: [],
            listInput: ''
        }
       
        if(this.state.lists === null) {
            localStorage.setItem('lists', JSON.stringify(this.state.lists))
        }
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

    deleteList = (id) => {
        this.setState({
            lists: this.state.lists.filter(listItem => listItem.id !== id)
        })
        this.props.setList({
            name: 'none',
            id: 'home'
        })
    }

    setList = (list) => {
        this.props.setList(list)
    }

    componentDidUpdate() {
        localStorage.setItem('lists', (JSON.stringify(this.state.lists)))
    }

    componentDidMount() {
        if (localStorage.getItem('lists') != null) {
            this.setState({
                lists: JSON.parse(localStorage.getItem('lists'))
             })
        }
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
                        return (
                            <div className='list-container'>
                                <p onClick={() => this.setList(listItem)} key={listItem.id}>{listItem.name}</p>
                                <p className='delete-list' onClick={() => this.deleteList(listItem.id)}>x</p>
                            </div>
                        ) 
                    })}
                </div>
            </div>
         );
    }
}
 
export default Sidebar;