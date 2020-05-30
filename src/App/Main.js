import React from 'react';

import './Main.css'
import {Link} from "../Components/Link";
import LinkForm from '../Components/LinkForm'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [{link: 'test', id: 'test', listId: 'test'}],
            listId: this.props.listId
        };
        // this.setState({
        //     links: this.state.links.filter(linkItem => linkItem.listId === this.props.listId)
        // })
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
        console.log(this.state.links, 'cdu')
        localStorage.setItem('links', JSON.stringify(this.state.links))
    }

    componentDidMount() {
        this.setState({
            links: JSON.parse(localStorage.getItem('links'))
         })
         console.log(this.state.links, 'cdm')
    }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.

    render() {
        return ( 
            <div className='main'>
                <div className='container'>

                    <LinkForm listName={this.props.listName} listId={this.props.listId} addLink={this.addLink}/>

                    <div className='links'>
                        {console.log(console.log(this.state.links))}
                        {this.state.links.map(linkItem => (
                            <Link 
                            link={linkItem.link}
                            key={linkItem.id}
                            listId={this.props.listId}
                            onDelete={() => this.deleteLink(linkItem.id)}/>
                        ))}
                    </div>

                </div>
            </div>
            
         );
    }
}
 
export default Main;