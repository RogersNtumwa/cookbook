import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import { CardHeader } from "@material-ui/core";

import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import CardPrice from "./CardPrice";
import Cardbody from "./Cardbody";

const CardButton = styled(CardActions)({
  diplay: "flex",
  justifyContent: "center",
  marginTop: "auto",
});

const ActionButton = styled(Button)({
  backgroundColor: "#9557c9",
  color: "#fff",
});

const CardTitle = styled(CardHeader)({
  textAlign: "center",
  background: "#edece8",
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

function description(description) {
  const Description_List = description.split(",");

  const index1 = description.indexOf("#");
  const index2 = description.indexOf("#", index1 + 1);
  let firtsParagraph = description.substring(index1 + 1, index2);

  let index3 = description.indexOf("#", index2 + 1);
  const index4 = description.indexOf("#", index3 + 1);
  const secondParagraph = description.substring(index3 + 1, index4);

  const para = [];
  Description_List.map((item) => para.push(item.split("#").pop()));
  return {
    firtsParagraph,
    secondParagraph,
    para,
  };
}

const PlanCard = ({ data, type, timeout }) => {
  const history = useHistory();
  const classes = useStyles();

  const onClickHandle = () => {
    history.push(`/subscription-form/${type}/${data.id}`);
  };

  return (
    <Grow in={true} timeout={timeout}>
      <Card className={classes.root} elevation={10}>
        <CardTitle title={data.name} />
        <CardContent>
          <CardPrice data={data} type={type} />
          <Cardbody
            firtsParagraph={description(data.description).firtsParagraph}
            para={description(data.description).para}
            secondParagraph={description(data.description).secondParagraph}
          />
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
