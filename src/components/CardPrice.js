import React from "react";
import styled from "@emotion/styled";

const CardPrice = ({ type, data }) => {
  const price = data.prices.find((price) => price.interval === type);

  const Monthly_save = data.prices.find((price) => price.interval !== type);

  const Annualpay = price.unit_amount * 12;
  const MonthPay = Math.ceil(price.unit_amount / 12);

  const Price = styled.div({
    display: "flex",
    flexDirection: "column",
    fontWeight: 300,
    fontFamily: "cursive",
  });

  return (
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
  );
};

export default CardPrice;
