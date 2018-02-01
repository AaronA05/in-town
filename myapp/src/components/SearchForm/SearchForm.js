import React from 'react';
import { Input, Row } from 'react-materialize';

//?q=music&location.address=Dallas%2C+TX
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
        this.createQuery(this.state);
    }

    createQuery(textString){
        const { city, stateLoc } = textString
        let myQuery = "location.address="+city+"%2C+"+stateLoc;
        this.props.cbFromApp(myQuery)
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