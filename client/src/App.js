import React from "react";
import "./main.sass";

import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";

import { Container } from "react-bootstrap";
import SearchPage from "./pages/SearchPage";
import SavePage from "./pages/SavePage";

function App() {

  return (
    <div>
      <GlobalNavbar />
      <Container className="py-5">
      <Header />
      <SearchPage />
      <SavePage />
      </Container>
     </div>
  );
}


export default App;
