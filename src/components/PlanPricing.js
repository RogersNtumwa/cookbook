import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

import Plans from "./Plans";
import SwichState from "../context/SwichState";

const StyledGrid = styled(Grid)({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#343740",
  color: "#fff",
});
const HeaderText = styled(Grid)({
  textAlign: "center",
});

function PlanPricing() {
  return (
    <SwichState>
      <StyledGrid>
        <HeaderText>
          <h1>Plans & Pricing</h1>
          <p>Flexible plans that scale with your Business</p>
        </HeaderText>
        <Plans />
      </StyledGrid>
    </SwichState>
  );
}

export default PlanPricing;
