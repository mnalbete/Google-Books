import React from "react";
import { Button, Card } from "react-bootstrap";



function SaveResults() {

    return (
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <h5>Author</h5>
                <Card.Text>
                    Some quick example text about book
                </Card.Text>
                <Button variant="primary">Link to book</Button>
                <br />
                <Button variant="primary">Delete</Button>
            </Card.Body>
        </Card>
    )


}

export default SaveResults;