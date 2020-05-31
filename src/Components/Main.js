import React from 'react';

import './css/Main.css'
import {Link} from "./Link";
import LinkForm from './LinkForm'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: this.props.links,
            currentList: this.props.list,
        };
    }

    addLink = link => {
       this.props.addLink(link)
    }

    deleteLink = id => {
        this.props.deleteLink(id)
    }

    render() {
        return ( 
            <div className='main'>
                <div className='container'>

                    <LinkForm listName={this.props.list.name} listId={this.props.list.id} addLink={this.addLink}/>

                    <div className='links'>
                        {this.props.links.map(linkItem => (
                            <Link 
                            link={linkItem.link}
                            key={linkItem.id}
                            listId={this.state.currentList.id}
                            onDelete={() => this.deleteLink(linkItem.id)}/>
                        ))}
                    </div>

                </div>
            </div>
            
         );
    }
}
 
export default Main;