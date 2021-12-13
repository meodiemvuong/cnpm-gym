import React, { useState, useEffect } from 'react'
import './Banner.css'
import pic1 from './../../store/imgs/pic1.png';
import pic2 from './../../store/imgs/pic2.png';
import pic3 from './../../store/imgs/pic3.jpg';
import pic4 from './../../store/imgs/pic4.png';
import pic5 from './../../store/imgs/pic5.png';

function Banner() {

    let [counter, setCounter] = useState(1);

    let handlePrev = () => {
        counter = counter + 1;
        if(counter<=5) setCounter(counter);
        else {
            counter = 1;
            setCounter(counter)
        }
    }

    let handleNext = () => {
        counter = counter - 1;
        if(counter>=1) setCounter(counter);
        else {
            counter = 5;
            setCounter(counter)
        }
    }


    useEffect(() => {
        //console.log("thaydoi")
        let timerID = setInterval(() => {
            if (counter < 5) {
                counter = counter + 1;
                setCounter(counter);
            } else {
                counter = 1;
                setCounter(counter)
            }
        }, 5000)

        return () => {
            //console.log('clear')
            clearInterval(timerID);
        }
    }, [counter])

    return (
        <div className="slider">
            <div className="grid">
                <div className="slider-wrapper">
                    <div className="navigation-left" onClick={handleNext}>
                        <i className="fas fa-chevron-left navigation-left-icon"></i>
                    </div>
                    <div className="navigation-right" onClick={handlePrev}>
                        <i className="fas fa-chevron-right navigation-right-icon"></i>
                    </div>
                    <div className="slides">
                        <input type="radio" checked={counter === 1 ? true : false} name="radio-btn" id="radio1" />
                        <input type="radio" checked={counter === 2 ? true : false} name="radio-btn" id="radio2" />
                        <input type="radio" checked={counter === 3 ? true : false} name="radio-btn" id="radio3" />
                        <input type="radio" checked={counter === 4 ? true : false} name="radio-btn" id="radio4" />
                        <input type="radio" checked={counter === 5 ? true : false} name="radio-btn" id="radio5" />

                        <div className="slide first">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="slide">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="slide">
                            <img src={pic3} alt="" />
                        </div>
                        <div className="slide">
                            <img src={pic4} alt="" />
                        </div>
                        <div className="slide">
                            <img src={pic5} alt="" />
                        </div>

                        <div className="navigation-auto">
                            <div className="navigation-auto1"></div>
                            <div className="navigation-auto2"></div>
                            <div className="navigation-auto3"></div>
                            <div className="navigation-auto4"></div>
                            <div className="navigation-auto5"></div>
                        </div>

                        <div className="navigation-manual">
                            <label htmlFor="radio1" className="manual-btn" onClick={() => { counter = 1; setCounter(counter) }}></label>
                            <label htmlFor="radio2" className="manual-btn" onClick={() => { counter = 2; setCounter(counter) }}></label>
                            <label htmlFor="radio3" className="manual-btn" onClick={() => { counter = 3; setCounter(counter) }}></label>
                            <label htmlFor="radio4" className="manual-btn" onClick={() => { counter = 4; setCounter(counter) }}></label>
                            <label htmlFor="radio5" className="manual-btn" onClick={() => { counter = 5; setCounter(counter) }}></label>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner
