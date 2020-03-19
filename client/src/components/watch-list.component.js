import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Container, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';



export default class WatchList extends Component {
    constructor(props) {
        super(props)

        this.onChanged = this.onChanged.bind(this)
        this.filter = this.filter.bind(this)

        this.state = {
            filter: "",
            watches: []
        }
    }

    //https://apiinventario100original.herokuapp.com/watches/list
    componentDidMount() {
        axios.get('http://localhost:5000/watches/list/')
            .then(response => {
                this.setState({ watches: response.data });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    filter() {
        axios.get('http://localhost:5000/watches/list/' + this.state.filter)
            .then(response => {
                this.setState({ watches: response.data });

            })
            .catch((error) => {
                console.log(error);
            })
    }




    onChanged(e, val) {
        console.log(this.state.filter)
        this.setState({
            [val]: e.target.value
        });
        //this.filter()


    }

    render() {
        return (
            <div>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Filtro</Form.Label>
                    <Form.Control as="select" value={this.state.filter} onChange={(e) => this.onChanged(e, "filter")}>
                        <option value="">Sin filtro</option>
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

                <Container>
                    <Row>{
                        this.state.watches.map(watch => <Col key={watch._id}><Card style={{
                            marginBottom: "3rem", width: "19rem"
                        }} >
                            <Card.Img variant="top" src={watch.url} style={{
                                width: "18.5rem", height: "18.5rem"
                            }} />
                            <Card.Body>
                                <Card.Title>{watch.model}</Card.Title>
                                <Card.Text>Stock: {watch.quantity}</Card.Text>
                                <Card.Text>{watch.brand}</Card.Text>
                                <Card.Text>{watch.location}</Card.Text>
                                <Link to={"/edit/" + watch._id}>Retirar Stock</Link>
                            </Card.Body>
                        </Card>
                        </Col>
                        )
                    }</Row>
                </Container >
            </div >
        );

    }
}