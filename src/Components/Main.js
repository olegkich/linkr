import React from 'react';

import './css/Main.css'
import {Link} from "./Link";
import LinkForm from './LinkForm'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [],
            currentList: this.props.list,
            currentLinks: []
        };

        if(this.state.links === null) {
            localStorage.setItem('links', JSON.stringify(this.state.links))
        }

    }

    addLink = link => {
        this.setState({
            links: [...this.state.links, link]
        })
    }

    deleteLink = id => {
        this.setState({
            links: this.state.links.filter(linkItem => linkItem.id !== id)
        })
    }

    componentDidUpdate() {
        localStorage.setItem('links', JSON.stringify(this.state.links))
    }

    componentDidMount() {
        this.setState({
            links: JSON.parse(localStorage.getItem('links')),
         })
         
    }


    render() {
        return ( 
            <div className='main'>
                <div className='container'>

                    <LinkForm listName={this.props.list.name} listId={this.props.list.id} addLink={this.addLink}/>

                    <div className='links'>
                        {this.state.links.map(linkItem => (
                            <Link 
                            link={linkItem.link}
                            key={linkItem.id}
                            listId={this.state.currentListId}
                            onDelete={() => this.deleteLink(linkItem.id)}/>
                        ))}
                    </div>

                </div>
            </div>
            
         );
    }
}
 
export default Main;