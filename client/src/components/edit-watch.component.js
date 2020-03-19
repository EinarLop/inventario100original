import React, { Component } from 'react';

import axios from 'axios';
import { Card, Button } from 'react-bootstrap';


export default class CreateWatch extends Component {
    constructor(props) {
        super(props);
        this.stock = this.stock.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            model: '',
            quantity: 0,
            brand: '',
            location: 'Centro',
            url: ''


        };
    }

    componentDidMount() {
        axios.get('https://apiinventario100original.herokuapp.com/watches/' + this.props.match.params.id)
            .then(response => {

                this.setState({
                    model: response.data.model,
                    quantity: response.data.quantity,
                    brand: response.data.brand,
                    location: response.data.location,
                    url: response.data.url
                })


            })
            .catch(function (error) {
                console.log(error);
            })
    }

    stock(e) {
        this.setState({
            quantity: this.state.quantity - 1
        })
        console.log("hola")
    }

    onSubmit(e) {
        e.preventDefault();

        const watch = {
            model: this.state.model,
            quantity: this.state.quantity,
            brand: this.state.brand,
            location: this.state.location,
            url: this.state.url

        };

        axios.post('https://apiinventario100original.herokuapp.com/watches/update/' + this.props.match.params.id, watch)
            .then(res => console.log(res.data));

        window.location = '/list';
        console.log(watch)

    }


    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.url} />
                <Card.Body>
                    <Card.Title>{this.state.model}</Card.Title>
                    <Card.Text>
                        Stock: {this.state.quantity}
                    </Card.Text>
                    <Button variant="primary" onClick={this.stock}>Retirar Stock</Button>
                    <br />
                    <Button variant="info" onClick={this.onSubmit}>Registrar Cambio</Button>
                </Card.Body>
            </Card>

        )
    }

}
