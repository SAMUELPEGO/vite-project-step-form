/* eslint-disable react/prop-types */
import './steps-mobile.css'

export default function StepsMobile({state}) {
    return (
        <div className={`steps-mobile step${state}`}>
            <span className="step-1">1</span>
            <span className="step-2">2</span>
            <span className="step-3">3</span>
            <span className="step-4">4</span>
        </div>
    )
}