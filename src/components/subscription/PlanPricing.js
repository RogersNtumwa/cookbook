import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Plans from "./Plans";
import SwitchContext from "./context/SwichState";

const StyledGrid = styled(Grid)({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const HeaderText = styled(Grid)({
  textAlign: "center",
});

const PlanPricing = () => {
  const { products, loading } = useSelector((state) => state.product);
  return (
    <SwitchContext>
      <StyledGrid>
        <HeaderText>
          <h1>Plans & Pricing</h1>
          <p>Flexible plans that scale with your Business</p>
        </HeaderText>
        <Plans products={products} loading={loading} />
      </StyledGrid>
    </SwitchContext>
  );
};

export default PlanPricing;
