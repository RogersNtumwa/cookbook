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
import { useHistory } from "react-router-dom";

import CardPrice from "./CardPrice";

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

const CardTitle = styled(CardHeader)({
  textAlign: "center",
  background: "#edece8",
});
const ListChild = styled(ListItem)({ padding: "2px", fontSize: "12px" });
const CardParagraphs = styled.div({
  fontSize: "12px",
  marginTop: ".5rem",
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    positionL: "relative",
    minWidth: 275,
    maxWidth: "10rem",
    marginRight: "10px",
    minHeight: "150px",
    padding: "0",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginBottom: "10px",
    borderRadius: "5px",
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
  const history = useHistory();
  const classes = useStyles();
  const price = data.prices.find((price) => price.interval === type);

  const Description_List = data.description.split(",");

  const index1 = data.description.indexOf("#");
  const index2 = data.description.indexOf("#", index1 + 1);
  let firtsParagraph = data.description.substring(index1 + 1, index2);

  let index3 = data.description.indexOf("#", index2 + 1);
  const index4 = data.description.indexOf("#", index3 + 1);
  const SecondParagraph = data.description.substring(index3 + 1, index4);

  const Para = [];
  Description_List.map((item) => Para.push(item.split("#").pop()));


  const onClickHandle = () => {
    history.push(`/subscription-form/${type}/${data.id}`);
  };

  return (
    <Grow in={true} timeout={timeout}>
      <Card className={classes.root} elevation={10}>
        <CardTitle title={data.name} />
        <CardContent>
          <ContentHead>
            <Pricing component="div">
              <Currency>{price.currency}</Currency>
              <Price>{price.unit_amount}</Price>/<span>{type}</span>
            </Pricing>
            <Prepaid>
              <CardPrice data={data} type={type} />
            </Prepaid>
          </ContentHead>
          <CardParagraphs>
            <p>{firtsParagraph}</p>
            <p>{SecondParagraph}</p>
          </CardParagraphs>
          <List>
            {Para.map((item, index) => (
              <ListChild key={index} style={{ padding: "2px" }}>
                <CheckIcon />
                <ListItemText primary={item} />
              </ListChild>
            ))}
          </List>
        </CardContent>
        <CardButton>
          <ActionButton
            variant="contained"
            size="small"
            onClick={onClickHandle}
          >
            Try Plan
          </ActionButton>
        </CardButton>
      </Card>
    </Grow>
  );
};

export default PlanCard;
