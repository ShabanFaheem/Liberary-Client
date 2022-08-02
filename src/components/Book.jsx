import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function Book() {
  return (
    <div>
      <Header color="#3D3C42" title="Books" content="Student"/>
      <Body isBook={true}/>
      <Footer />
    </div>
  );
}

export default Book;
