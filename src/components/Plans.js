import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";

import PlanCard from "./PlanCard";
import Switch from "./Switch";
import SwitchContext from "../context/SwitchContext";
import { data } from "./CardData";

const ProductGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  AlignItems: "center",
  padding: "10px",
  flexWrap: "wrap",
});

const PlanContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Plans = () => {
  const { type } = useContext(SwitchContext);

  return (
    <PlanContainer>
      <Switch />
      <ProductGrid>
        {data.map((product, index) => (
          <PlanCard
            key={product.id}
            data={product}
            type={type}
            timeout={1000 * (index + 1)}
          />
        ))}
      </ProductGrid>
    </PlanContainer>
  );
};

export default Plans;
