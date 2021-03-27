import React, { useRef }from "react";
import { Card, Form, Button} from "react-bootstrap";
import API from "../utils/api";

function SearchForm({setBooks}) {

    const bookInput = useRef();


    const handleSubmit = event => {

        event.preventDefault();
        API.getBooks(bookInput.current.value)
            .then((res) => {
            console.log(res);
            setBooks(res.data.items);
        });
    }

    return(
    <Card>
        <Card.Body>
            <h2>Search</h2>
            <Form >
                <Form.Group>
                    <Form.Label ></Form.Label>
                    <Form.Control ref={bookInput} type="text" placeholder="Enter book title here" />
                </Form.Group>
                <Button onClick={handleSubmit} varitant="dark" type="submit">
                    Search
                </Button>
            </Form>
        </Card.Body>
    </Card>
    )
}

export default SearchForm;