import React, { Component } from "react";
//import burgerIngredient from "../../components/Burger/BurgerIngredients/BurgerIngredient";
import Burger from "../../components/Burger/Burger";
import Aux from "../../Hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  cheese: 1.4,
  meat: 1.3,
  beef: 0.7,
  salad: 0.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      beef: 0,
      salad: 0,
    },
    totalPrice: 3,
    totalIngredients: 0,
    purchasable: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    let updatedTotalIngredients = ++this.state.totalIngredients;

    // console.log('before updatin the state',updatedTotalIngredients,this.state.totalIngredients)
    // updatedTotalIngredients++

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      totalIngredients: updatedTotalIngredients,
    });
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    } else {
      const oldCount = this.state.ingredients[type];
      const newCount = oldCount - 1;

      const updatedIngredients = {
        ...this.state.ingredients,
      };

      updatedIngredients[type] = newCount;

      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPice = oldPrice - priceDeduction;
      let updatedTotalIngredients = --this.state.totalIngredients;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPice,
        totalIngredients: updatedTotalIngredients,
      });
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasable: true });
  };

  modalClosedHandler = () => {
    this.setState({ purchasable: false });
  };

  purchaseContinue = () => {
    alert("ORDERED");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasable}
          modalClosed={this.modalClosedHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.modalClosedHandler}
            purchaseContinued={this.purchaseContinue}
            totalPrice={this.state.totalPrice}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />

        <p>lhll</p>

        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          totalIngredients={this.state.totalIngredients}
          purchase={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;

// {key:value,ley :value}.map() //extracts #items//
// reduce method by add all elememts
// if sum < = 0 return nothing
