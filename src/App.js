import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Components/Navbar/Navbar";
import GridLayout from "./Components/GridLayout/GridLayout";
import Container from "@material-ui/core/Container";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
