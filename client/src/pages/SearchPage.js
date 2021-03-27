import React, { useState } from "react";

import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import { Container } from "react-bootstrap";

function SearchPage (){

  const [books, setBooks] = useState([])


return (
    <div>
      <Container className="py-5">
      <SearchForm setBooks={setBooks}/>
      <Results books={books}/>
      </Container>
     </div>
  );
}

export default SearchPage;