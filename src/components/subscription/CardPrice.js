import React from "react";

import Typography from "@material-ui/core/Typography";

import styled from "@emotion/styled";

const Price = styled.div({
  display: "flex",
  flexDirection: "column",
  fontWeight: 300,
  fontFamily: "cursive",
});

const Cardprice = styled.span({
  fontSize: "2rem",
  marginLeft: "5px",
  color: "#593478",
});

const ContentHead = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Pricing = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "0",
});

const Currency = styled.span({
  fontStyle: "italic",
});

const Prepaid = styled.span({
  fontSize: ".7rem",
  fontFamily: "sans-serif",
});

const CardPrice = ({ type, data }) => {
  const price = data.prices.find((price) => price.interval === type);

  const Monthly_save = data.prices.find((price) => price.interval !== type);

  const Annualpay = price.unit_amount * 12;
  const MonthPay = Math.ceil(price.unit_amount / 12);

  return (
    <ContentHead>
      <Pricing component="div">
        <Currency>{price.currency}</Currency>
        <Cardprice>{price.unit_amount}</Cardprice>/<span>{type}</span>
      </Pricing>
      <Prepaid>
        <Price>
          {type === "month" ? (
            <>
              <span>"aed {Annualpay} Pre-Paid Yearly"</span>
              <span>
                SAVE aed {Annualpay - Monthly_save.unit_amount} with a Year plan
              </span>
            </>
          ) : (
            <span>"aed {MonthPay} Pre-Paid Monthly"</span>
          )}
        </Price>
      </Prepaid>
    </ContentHead>
  );
};

export default CardPrice;
