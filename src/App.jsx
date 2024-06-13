/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import StepsMobile from "./components/steps/steps-mobile";
import StepsDesktop from "./components/steps/steps-desktop";
import StepsOneInfo from "./components/steps-info/step-1-info/step-one-info";
import StepTwoInfo from "./components/steps-info/step-2-info/step-2-info";
import StepThreeInfo from "./components/steps-info/step-3-info/step-3-info";
import StepForInfo from "./components/steps-info/step-4-info/step-4-info";
import StepFiveInfo from "./components/steps-info/step-5-info/step-5-info";

export default function Element() {
  const [state, setState] = React.useState(0);
  const [stateView, setStateView] = React.useState(true);
  const [plan,setPlan] = React.useState({plan:"",
price:""})
 const [addons,setAddons] = React.useState([])
  
  const steps = [
    <StepsOneInfo key={0} state={state} setState={setState} />,
    <StepTwoInfo
      key={1}
      state={state}
      setState={setState}
      stateView={stateView}
      setStateView={setStateView}
      setPlan = {setPlan}
    />,
    <StepThreeInfo
      key={2}
      state={state}
      setState={setState}
      stateView={stateView}
      setStateView={setStateView}
      setAddons={setAddons}
     
    />,
    <StepForInfo key={3} state={state} setState={setState} plan={plan} stateView={stateView} addons={addons}/>,
    <StepFiveInfo key={4} state={state} setState={setState} />,
  ];

  const stepsBar = [
    <StepsMobile key={0} state={state} />,
    <StepsDesktop key={1} state={state} />,
  ];

  return (
    <>
      {stepsBar[0]}
      {stepsBar[1]}

      <div className="wrapper-steps-info">{steps[state]}</div>
    </>
  );
}
