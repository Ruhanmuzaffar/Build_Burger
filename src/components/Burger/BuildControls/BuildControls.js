import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Beef", type: "beef" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Total Price = ${props.price.toFixed(2)}</strong>
      </p>

      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            // added={() => props.ingredientAdded(ctrl.type)}
            type={ctrl.type}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            totalIngredients={props.totalIngredients}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}

      <button
        className={classes.OrderButton}
        disabled={props.totalIngredients === 0 ? true : false}
        onClick={props.purchase}
      >
        ORDER
      </button>
    </div>
  );
};

export default buildControls;
