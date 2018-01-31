import React from 'react';
import { Card, Col, Container } from 'react-materialize';

export default class EBevent extends React.Component {
    render() {
        return (
            <Container>
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href={this.props.link} target="#">This is a link</a>]}>
                        {this.props.bigTitle}
                    </Card>
                </Col>
            </Container>
        )
    }
}



