/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./step-3-info.css";

export default function StepThreeInfo({
  state,
  setState,
  stateView,
  setStateView,
  setAddons,
}) {
  function goBack() {
    setStateView(true);
    setState(state - 1);
  }
  function nextStep() {
    const newArrayAddons = [];
    for (let element of arrayElements) {
      if (element[0].current.classList.contains("selected")) {
        newArrayAddons.push({ description: element[1], price: element[2] });
        
      } else {
        continue;
      }
    }
    setAddons(newArrayAddons);
    setState(state + 1);
  }

  const arrayElements = [
    [useRef(null), "Online service", "+$1/mo"],
    [useRef(null), "Larger storage", "+$2/mo"],
    [useRef(null), "Customizable Profile", "+$2/mo"],
    [useRef(null), "Online service", "+$10/yr"],
    [useRef(null), "Larger storage", "+$20/yr"],
    [useRef(null), " Customizable Profile", "+$20/yr"],
  ];

const selectedHandler = (event)=> {
  const element = event.target
  const checkmark = event.target.previousSibling.children[0]
  if (element.classList.contains("selected")) {
    element.classList.remove("selected");
    checkmark.style.backgroundColor = "white";
    element.style.borderColor = "hsla(255, 100%, 80%)";
    
  }else {
    element.classList.add("selected");
    checkmark.style.backgroundColor = "var(--Purplishblue)";
    element.style.borderColor = "hsl(213, 96%, 18%)";
  }}
    
        

  return (
    <section className="section-step-three">
      <header>Pick add-ons</header>
      <p>Add-ons help enhance your gaming experience.</p>
      <div
        className={`section-step-three-addons ${
          stateView ? "show" : "hidde"
        } monthly`}
      >
        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Online service <br /> <strong>Access to multiplayer games</strong>
            </p>
            <span>+$1/mo</span>
          </div>
          <div ref={arrayElements[0][0]} onClick={selectedHandler}></div>
        </div>

        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Larger storage
              <br />
              <strong>Extra 1TB of cloud save</strong>
            </p>
            <span>+$2/mo</span>
          </div>
          <div ref={arrayElements[1][0]} onClick={selectedHandler}></div>
        </div>

        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Customizable Profile <br />
              <strong>Custom theme on your profile</strong>
            </p>
            <span>+$2/mo</span>
          </div>
          <div ref={arrayElements[2][0]} onClick={selectedHandler}></div>
        </div>
      </div>
      <div
        className={`section-step-three-addons ${
          stateView ? "hidde" : "show"
        } yearly`}
      >
        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Online service <br /> <strong>Access to multiplayer games</strong>
            </p>
            <span>+$10/yr</span>
          </div>
          <div ref={arrayElements[3][0]} onClick={selectedHandler}></div>
        </div>

        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Larger storage
              <br />
              <strong>Extra 1TB of cloud save</strong>
            </p>
            <span>+$20/yr</span>
          </div>
          <div ref={arrayElements[4][0]} onClick={selectedHandler}></div>
        </div>

        <div>
          <div>
            <img src="images/icon-checkmark.svg" alt="" />
            <p>
              Customizable Profile <br />
              <strong>Custom theme on your profile</strong>
            </p>
            <span>+$20/yr</span>
          </div>
          <div ref={arrayElements[5][0]} onClick={selectedHandler}></div>
        </div>
      </div>
      <div className="button-change-step-three btn-steps">
        <button type="button" className="button-prev-step" onClick={goBack}>
          Go Back
        </button>
        <button onClick={nextStep} className="button-next-step" type="submit">
          Next Step
        </button>
      </div>
    </section>
  );
}
