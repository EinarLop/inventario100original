import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'



export default class CreateWatch extends Component {


    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            model: '',
            quantity: 0,
            brand: 'Timex',
            location: 'Centro',
            url: 'w'


        };
    }

    onChange(e, val) {
        this.setState({
            [val]: e.target.value
        });

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

        axios.post('https://apiinventario100original.herokuapp.com/watches/add', watch)
            .then(res => console.log(res.data));

        window.location = '/list';
        console.log(watch)

    }



    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Modelo" onChange={(e) => this.onChange(e, "model")} />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="text" placeholder="Stock" onChange={(e) => this.onChange(e, "quantity")} />
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Marca2</Form.Label>
                        <Form.Control as="select" value={this.state.brand} onChange={(e) => this.onChange(e, "brand")}>
                            <option value="Timex">Timex</option>
                            <option value="Armani">Armani</option>
                            <option value="Fossil">Fossil</option>
                            <option value="Bulova">Bulova</option>
                            <option value="GByGuess">G By Guess</option>
                            <option value="Guess">Guess</option>
                            <option value="Nautica">Nautica</option>
                            <option value="Tommy">Tommy</option>
                            <option value="Adidas">Adidas</option>
                            <option value="NineWest">Nine West</option>
                            <option value="MichaelKors">Michael Kors</option>
                            <option value="KennethCole">Kenneth Cole</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Oficina</Form.Label>
                        <Form.Control as="select" value={this.state.location} onChange={(e) => this.onChange(e, "location")}>
                            <option value="Centro">Centro</option>
                            <option value="Interlomas">Interlomas</option>
                        </Form.Control>
                    </Form.Group>



                    <Form.Group controlId="formBasicText">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="text" placeholder="URL" onChange={(e) => this.onChange(e, "url")} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )

    }

} 
