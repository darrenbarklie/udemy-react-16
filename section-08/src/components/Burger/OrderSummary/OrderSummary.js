import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      )
    })
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Auxiliary>
  );
};

export default orderSummary;