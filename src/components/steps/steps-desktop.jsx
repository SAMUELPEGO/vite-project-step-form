/* eslint-disable react/prop-types */
import './steps-desktop.css'

export default function StepsDesktop({state}) {
    return (
        <div className={`steps-desktop step${state}`}>
            <div className="step-1"><span>1</span><p>STEP 1 <br/><strong>YOUR INFO</strong></p></div>
            <div className="step-2"><span>2</span><p>STEP 2 <br/><strong>SELECT PLAN</strong></p></div>
            <div className="step-3"><span>3</span><p>STEP 3 <br/><strong>ADD-ONS</strong></p></div>
            <div className="step-4"><span>4</span><p>STEP 4 <br/><strong>SUMMARY</strong></p></div>
        </div>
    )
}
