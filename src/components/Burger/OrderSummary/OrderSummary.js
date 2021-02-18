import React from "react";
import Aux from "../../../Hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const burgerDetails = Object.keys(props.ingredients).map((idKey) => {
    return (
      <li key={idKey}>
        <span style={{ textTransform: "capitalize" }}>
          {idKey}:{props.ingredients[idKey]}
        </span>
      </li>
    );
  });

  //[{cheese:1},{salad:2}]
  return (
    <Aux>
      <h3>Your Order </h3>
      <p>The Ingredients of your Burger are :</p>
      <ul>{burgerDetails}</ul>
      <p>
        <strong>Total Price:${props.totalPrice.toFixed(2)}</strong>
      </p>
      <h2>Check Out ?</h2>

      <Button BtnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button BtnType="Success" clicked={props.purchaseContinued}>
        ORDER
      </Button>
    </Aux>
  );
};

export default orderSummary;

// ur ingredients :
// li
