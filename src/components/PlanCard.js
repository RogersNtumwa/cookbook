import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import styled from "@emotion/styled";
import Grow from "@material-ui/core/Grow";
import { CardHeader } from "@material-ui/core";

const CardButton = styled(CardActions)({
  diplay: "flex",
  justifyContent: "center",
  marginTop: "auto",
});

const Price = styled.span({
  fontSize: "2rem",
  marginLeft: "5px",
  color: "#593478",
});
const Currency = styled.span({
  fontStyle: "italic",
});

const ActionButton = styled(Button)({
  backgroundColor: "#9557c9",
  color: "#fff",
});

const Pricing = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "0",
});

const Prepaid = styled.span({
  fontSize: ".7rem",
  fontFamily: "sans-serif",
});

const ContentHead = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const ListChild = styled(ListItem)({ padding: "2px" });

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    positionL: "relative",
    minWidth: 275,
    maxWidth: "10rem",
    marginRight: "10px",
    minHeight: "150px",
    padding: "10px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginBottom: "10px",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PlanCard = ({ data, type, timeout }) => {
  const classes = useStyles();
  const price = data.prices.find((price) => price.interval === type);

  const Descriptin_List = data.description.split(",");

  return (
    <Grow in={true} timeout={timeout}>
      <Card className={classes.root} elevation={10}>
        <CardHeader title={data.name} style={{ textAlign: "center" }} />
        <CardContent>
          <ContentHead>
            <Pricing component="div">
              <Currency>{price.currency}</Currency>
              <Price>{price.unit_amount}</Price>/<span>{type}</span>
            </Pricing>
            <Prepaid>
              {type === "month" ? (
                <span>"aed {price.unit_amount * 12} Pre-Paid Yearly"</span>
              ) : (
                <span>
                  "aed {Math.ceil(price.unit_amount / 12)} Pre-Paid Monthly"
                </span>
              )}
            </Prepaid>
          </ContentHead>
          <List>
            {Descriptin_List.map((item, index) => (
              <ListChild key={index} style={{ padding: "2px" }}>
                <CheckIcon />
                <ListItemText primary={item} />
              </ListChild>
            ))}
          </List>
        </CardContent>
        <CardButton>
          <ActionButton variant="contained" size="small">
            Try Plan
          </ActionButton>
        </CardButton>
      </Card>
    </Grow>
  );
};

export default PlanCard;
