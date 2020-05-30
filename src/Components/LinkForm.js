import React from 'react';

import shortid from 'shortid';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

class LinkForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            linkInput: ''
        }
    }

    handleInput = e => {
        e.preventDefault()

        this.setState({
            linkInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    
        this.props.addLink({
            link: this.state.linkInput,
            id: shortid.generate(),
            listId: this.props.listId
        })

        this.setState({
            linkInput: ''
        })
    }

    render() {
        return ( 
        <div>
            <Form>
                <legend>
                    <h2>{this.props.listName}</h2>
                </legend>

                <Input placeholder='enter your link' onChange={this.handleInput} value={this.state.linkInput}/>

                <Button variant='raised' color='primary' onClick={this.handleSubmit}>
                Add Link
                </Button>
            </Form>           
        </div>
     );
    }
}
 
export default LinkForm;