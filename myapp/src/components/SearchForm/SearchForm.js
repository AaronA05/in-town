import React from 'react';
import { Input, Row } from 'react-materialize';


export default class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            stateLoc: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.city + ' ' + this.state.stateLoc);
        this.props.cbFromApp(this.state);
        
    }

    render(){
        return(
            <Row>
                <Input 
                    placeholder="Placeholder" 
                    s={6} 
                    label="City"
                    name='city'
                    onChange={this.handleChange} 
                    value={this.state.city}
                />
                <Input
                    s={6}
                    label="State"
                    name='stateLoc'
                    onChange={this.handleChange}
                    value={this.state.stateLoc}
                />
                <Input
                    s={6}
                    type='submit'
                    onClick={this.handleSubmit}
                />
            </Row>

        )
    }
}