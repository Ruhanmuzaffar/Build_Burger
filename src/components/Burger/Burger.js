import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from "./Burger.css";

const burger = (props) => {
  // let ingredient = [];
  // for (let i = 0; i < props.top.length; i++) {
  //   ingredient.push(<BurgerIngredient type={props.top[i].toString()} />);
  // }

  // return <div className={classes.Burger}>{ingredient}</div>;

  let ingredients = Object.keys(props.ingredients)
    .map((idKey) => {
      return [...Array(props.ingredients[idKey])].map((_, i) => {
        return <BurgerIngredient key={idKey + i} type={idKey} />;
      });
    })
    .reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please Add Some Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
