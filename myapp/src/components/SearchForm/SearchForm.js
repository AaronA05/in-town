import React from 'react';
import { Input, Row, Button } from 'react-materialize';
import './SearchForm.css';

//?q=music&location.address=Dallas%2C+TX
export default class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            stateLoc: '',
            startDate: '',
            endDate: '',
            touched: {
                city: false,
                stateLoc: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        if(!this.canBeSubmitted()){
            event.preventDefault();
            return;
        }
        this.createQuery(this.state);
    }

    canBeSubmitted(){
        const errors = this.validate(this.state.city, this.state.stateLoc);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled; 
    }

    createQuery(textString){
        const { city, stateLoc, startDate, endDate } = textString
        console.log("START", startDate);
        let myStartDate = new Date(startDate);
        let startDay = myStartDate.getDate();
        let startMonth = myStartDate.getMonth() + 1;
        let startYear = myStartDate.getFullYear();
        let myEndDate = new Date(endDate);
        let endDay = myEndDate.getDate();
        let endMonth = myEndDate.getMonth() + 1;
        let endYear = myEndDate.getFullYear();
        // start_date.range_start = 2018 - 03 - 22018 - 03 - 4T00 % 3A00 % 3A00
        // YYYY-MM-DDThh:mm:ss
        let myStartDateQuery = "&start_date.range_start=" + startYear + "-" + startMonth + "-" + startDay + "T00%3A00%3A00";
        let myEndDateQuery = "&start_date.range_end=" + endYear + "-" + endMonth + "-" + endDay +"T00%3A00%3A00";
        let myQuery = "location.address=" + city + "%2C+" + stateLoc + myStartDateQuery + myEndDateQuery; 
        console.log(myQuery);
        this.props.cbFromApp(myQuery)
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true }
        })
    }

    validate(city, stateLoc) {
    return {
        city: this.state.city.length === 0,
        stateLoc: this.state.stateLoc.length === 0
    }

}

    render(){
        const errors = this.validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };
        return(
        <div>
            <Row>
                <Input 
                    className={shouldMarkError('city') ? 'error' : ''}
                    onBlur={this.handleBlur('city')} 
                    s={6} 
                    label="City"
                    name='city'
                    onChange={this.handleChange} 
                    value={this.state.city}
                />
                <Input
                    className={shouldMarkError('stateLoc') ? 'error' : ''}
                    onBlur={this.handleBlur('stateLoc')}
                    s={6}
                    label="State"
                    name='stateLoc'
                    onChange={this.handleChange}
                    value={this.state.stateLoc}
                />
            </Row>
            <Row>
                <Input
                    name='startDate'
                    type='date'
                    onChange={this.handleChange}
                    value={this.state.startDate}
                    label='Date of Arrival'
                // YYYY-MM-DDThh:mm:ss
                />
                <Input
                    name='endDate'
                    type='date'
                    onChange={this.handleChange}
                    value={this.state.endDate}
                    label='Date of Departure'
                    // YYYY-MM-DDThh:mm:ss
                />
            </Row>
            <Row>
                <Button
                    s={6}
                    onClick={this.handleSubmit}
                    disabled={isDisabled}
                >
                Submit
                </Button>
            </Row>
        </div>
        )
    }
}

