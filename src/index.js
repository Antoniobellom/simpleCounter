import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';



const SimpleCounter = (props) => {
  return (<div className="bigCounter">

              <div> <i class="fas fa-clock"></i> </div>
            <div className = "four">{props.digitFour %10}</div>
            <div className = "three">{props.digitThree %10}</div>
            <div className = "two">{props.digitTwo %10}</div>
            <div className = "one">{props.digitOne %10}</div>


            </div>)
}
SimpleCounter.propTypes ={
  digitOne: PropTypes.number,
  digitTwo: PropTypes.number,
  digitThree: PropTypes.number,
  digitFour: PropTypes.number

};
let counter = 0
setInterval(function(){
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  
  counter ++

  ReactDOM.render(
    <>
      <SimpleCounter digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four} />
    </>,
    document.getElementById('root')
  );
  

},1000);



reportWebVitals();
