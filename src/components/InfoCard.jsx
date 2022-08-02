import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const customStyle = {
  width: 300,
  height: 230,
  backgroundColor: "#81CACF",
  margin: 2,
  display: "inline-block",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
};

function InfoCard(props) {
  return (
    <Card sx={customStyle}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            BY 
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          {props.author}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Borrow Date: {props.borrowDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Return Date: {props.returnDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Returned
        </Button>
      </CardActions>
    </Card>
  );
}
export default InfoCard;
