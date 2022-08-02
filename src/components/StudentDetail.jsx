import React from "react";
import Header from "./Header";
import DetailBody from "./DetailBody";  

function StudentDetail(props) {
  return (
    <div>
      <Header color="#7F5283" title="Student" content="Book"/>
      <DetailBody />
    </div>
  );
}

export default StudentDetail;