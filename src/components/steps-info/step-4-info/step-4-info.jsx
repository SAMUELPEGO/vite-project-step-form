/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import "./step-4-info.css";

export default function StepForInfo({
  state,
  setState,
  stateView,
  plan,
  addons,
}) {

  function goBack() {
    setState(state - 1);
  }
  function nextStep() {
    setState(state + 1);
  }
  function changePlan() {
    setState(1)
  }
  function totalHandler() {
    let arrayPrices = [];
    let pricePlan = plan.price.match(/[0-9]/g).join("")
    for (let addon of addons) {
      let matchNumber = [];
      for (let price of addon.price) {
        if (parseInt(price) || price == "0") {
          matchNumber.push(parseInt(price));
        }
        if (price == "/") {
          arrayPrices.push(parseInt(matchNumber.join("")));
          break;
        }
      }
    }
    const total = arrayPrices.reduce(
      (acumulador, numero) => acumulador + numero,
      parseInt(pricePlan)
    );

    return total;
  }
  const arrayAddons = addons.map((addon, index) => {
    return (
      <div key={index + 1}>
        <p className="addon-description">{addon.description}</p>
        <p>{addon.price}</p>
      </div>
    );
  });
  return (
    <section className="section-step-for">
      <header>Finishing up</header>
      <p className="warning-text">Double-check everything looks Ok before confirming</p>

      <div>
        <p>
          {plan.plan}({stateView ? "Monthy" : "Yearly"})<br />
          <b className="change-plan" onClick={changePlan}>Change</b>
        </p>
        <span>{plan.price}</span>
      </div>
      <hr />
      <div>{arrayAddons}</div>
      <div>
        <div className="total-price-container">
          <p className="total-price">Total (per month)</p>
          <p>
            ${totalHandler()}
            {stateView ? "/mo" : "/yr"}
          </p>
        </div>
      </div>
      <div className="button-change-step-four btn-steps">
        <button type="button" className="button-prev-step" onClick={goBack}>
          Go Back
        </button>
        <button onClick={nextStep} className="button-next-step" type="submit">
          Confirm
        </button>
      </div>
    </section>
  );
}
