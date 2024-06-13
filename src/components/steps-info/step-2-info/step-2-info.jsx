/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import "./step-2-info.css";

// eslint-disable-next-line react/prop-types
export default function StepTwoInfo({
  state,
  setState,
  stateView,
  setStateView,
  setPlan
}) {
  const ref = useRef(null);
  const refer = useRef(switchToYearly);

  function switchToYearly(event) {
    const element = event.target;
    element.style.justifyContent = "flex-end";
    setStateView(false);
    refer.current = switchToMonthly;
  }
  function switchToMonthly(event) {
    const element = event.target;
    element.style.justifyContent = "flex-start";
    setStateView(true);
    refer.current = switchToYearly;
  }
  function goBack() {
    setStateView(true);
    setState(state - 1);
  }

  const arrayElements = [
    [useRef(null), "Arcade", "$9/mo"],
    [useRef(null), "Advanced", "$12/mo"],
    [useRef(null), "Pro", "$15/mo"],
    [useRef(null), "Arcade", "$90/yr"],
    [useRef(null), "Advanced", "$120/yr"],
    [useRef(null), "Pro", "$150/yr"],
  ];

  useEffect(() => {
    for (let element of arrayElements) {
      element[0].current.addEventListener("click", (event) => {
        for (let element of arrayElements) {
          if (element[0].current == event.target) {
            const domElement = element[0].current;
            domElement.style.borderColor = "hsl(213, 96%, 18%)";
            domElement.classList.add("focused")
          } else {
            const domElement = element[0].current;
            domElement.style.borderColor = "hsla(255, 100%, 80%)";
            domElement.classList.remove("focused")
          }
        }
      });
    }
  });
  function nextStep() {
    arrayElements.forEach((element) => {
      if (element[0].current.classList.contains("focused")) {
        setPlan({plan:element[1],
        price:element[2]})
        setState(state + 1);
      }
    });
  }

  return (
    <section className="section-step-two">
      <header>Select your plan</header>
      <p>You have the option of monthly or yearly billing.</p>
      <div
        className={`section-step-two-plans monthly ${
          stateView ? "show" : "hidde"
        }`}
      >
        <div tabIndex={0}>
          <div>
          <img src="images/icon-arcade.svg" alt="" />
          <p>
            Arcade <br />
            <span>$9/mo</span>
          </p>
          </div>
          <div ref={arrayElements[0][0]}></div>
        </div>

        <div tabIndex={1} >
          <div>
          <img src="images/icon-advanced.svg" alt="" />
          <p>
            Advanced <br />
            <span>$12/mo</span>
          </p>
          </div>
          <div ref={arrayElements[1][0]}></div>
        </div>

        <div tabIndex={2} >
          <div>
          <img src="images/icon-pro.svg" alt="" />
          <p>
            Pro <br />
            <span>$15/mo</span>
          </p>
          </div>
          <div ref={arrayElements[2][0]}></div>
        </div>
      </div>
      <div
        className={`section-step-two-plans ${
          stateView ? "hidde" : "show"
        } yearly}`}
      >
        <div tabIndex={3} >
          <div>
          <img src="images/icon-arcade.svg" alt="" />
          <p>
            Arcade <br />
            <span>$90/yr</span>
            <br />2 months free
          </p>
          </div><div ref={arrayElements[3][0]}></div>
        </div>

        <div tabIndex={4} >
          <div>
          <img src="images/icon-advanced.svg" alt="" />
          <p>
            Advanced <br />
            <span>$120/yr</span>
            <br />2 months free
          </p>
          </div><div ref={arrayElements[4][0]}></div>
        </div>

        <div tabIndex={5}>
          <div>
          <img src="images/icon-pro.svg" alt="" />
          <p>
            Pro <br />
            <span>$150/yr</span>
            <br />2 months free
          </p>
          </div><div  ref={arrayElements[5][0]}></div>
        </div>
      </div>

      <div className="section-step-two-switch">
        <div className="labelMonthly">Monthly</div>
        <div className="button-switch" onClick={refer.current}>
          <div className="circle-switch"></div>
        </div>
        <div className="labelYearly">Yearly</div>
      </div>
      <div className="button-change-step-two btn-steps">
        <button
          type="button"
          className="button-prev-step"
          onClick={goBack}
          ref={ref}
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          className="button-next-step"
          type="submit"
          form="section-step-one-form"
        >
          Next Step
        </button>
      </div>
    </section>
  );
}
