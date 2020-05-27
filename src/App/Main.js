import React from 'react';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';
import './Main.css'
import {Link} from "../Components/Link";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkEntered: '',
            links: []
        }
    }

    handleInput = (e) => {
        this.setState({
            linkEntered: e.target.value
        })
        console.log(this.state.linkEntered)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            links: [...this.state.links, this.state.linkEntered],
            linkEntered: ''
        })
        console.log(this.state.links.toString())
    }

    render() {
        let links = []
        links = this.state.links

        return ( 
            <div className='main'>
                <div className='container'>
                    <Form>
                        <legend>
                            <h2>list title</h2>
                        </legend>
                        <Input placeholder='enter your link'
                        onChange={this.handleInput}
                        value={this.state.linkEntered}/>
                        <Button variant='raised' color='primary'
                        onClick={this.handleSubmit}>Add Link</Button>
                    </Form>
                    <div className='link-list'>
                        {links.map(link => (
                            <Link link={link}/>
                        ))}
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Main;