/* eslint-disable react/prop-types */
import "./step-one-info.css";

export default function StepOnewInfo({state,setState}) {
  const submitHandle = (event) => {
    event.preventDefault();
    const elementsForm = [
      event.target.elements[0],
      event.target.elements[1],
      event.target.elements[2],
    ];
    const arrayValidation = []
    elementsForm.forEach((element) => {
     
      if (element.value) {
        element.className = "*";
        element.previousElementSibling.className = "*";
        arrayValidation.push(element.value)
       
        
      } 
      else if (element.value == false){
        element.className = "visible";
        element.previousElementSibling.className = "error-message";
      }
      if (arrayValidation.length == 3) {
       setState(state+1)
      }

    });

  };
  
  return (
    <section className="section-step-one">
      
      <header>Personal info</header>
      <p>Please provide your name, email address, and phone number.</p>
      <form id="section-step-one-form" onSubmit={submitHandle}>
        <div>
          <label>Name</label>
          <span id="input-text-error" >This field is required</span>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            name="name"
            id="text"
          ></input>
        </div>
        <div>
          <label>Email Adress</label>
          <span id="input-email-error">This field is required</span>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <label>Phone Number</label>
          <span id="input-number-error">This field is required</span>
          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            name="number"
            id="number"
          ></input>
        </div>
      </form>
      <div className="button-change-step-one btn-steps">
       
        
        <button
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
