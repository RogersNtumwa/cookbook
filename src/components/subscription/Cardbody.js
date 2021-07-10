import React, { Fragment } from "react";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";

import styled from "@emotion/styled";

const ListChild = styled(ListItem)({ padding: "2px", fontSize: "12px" });

const Cardbody = ({ firtsParagraph, para, secondParagraph }) => {
  return (
    <Fragment>
      <Typography>{firtsParagraph}</Typography>
      <List>
        {para.map((item, index) => (
          <ListChild key={index} style={{ padding: "2px" }}>
            <CheckIcon />
            <ListItemText primary={item} />
          </ListChild>
        ))}
      </List>
      <Typography>{secondParagraph}</Typography>
    </Fragment>
  );
};

export default Cardbody;
