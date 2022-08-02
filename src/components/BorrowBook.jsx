import React, { useState ,useRef } from "react";
import { Zoom, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import DatePicker from "./DatePicker";
import Selector from "./Selecter";

const bookUrl = "http://localhost:5000/book";

function BorrowBook(props) {
    const inputRef = useRef(null);

    function handleClick(){
        console.log(inputRef.current.value);
    }
    function borrowDate(date){
        console.log(date);
    }
    function returnDate(date){
        console.log("date")
    }

    function returnBook(bookId){
        console.log(bookId);
    }


  return (
    <div className="create-note">
      <form>
        <DatePicker text="Borrow Date" pickDate={borrowDate} />
        <DatePicker text="Return Date" pickDate={returnDate} />
        <Selector pickbook={borrowDate}/>
        <div className="add-button"  >
          <Zoom in="true">
            <Fab size="small" color="info" onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      </form>
    </div>
  );
}
export default BorrowBook;