import styles from "./shutdown.module.css"
import React, { useRef, useState, useEffect } from 'react'
import Draggable from 'react-draggable'; // The default
import {AiOutlineReload} from "react-icons/ai"


const Warning = (content) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [isShutDown, setisShutdown] = useState(false)
    useEffect(() => {
        
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           setTimeLeft(null)
           
           
           setTimeout(function() {
            setisShutdown(true)
           }, 1000)
        }
    
        // exit early when we reach 0
        if (!timeLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
    
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => {clearInterval(intervalId);}
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);
    return (
        <>
        {
            isShutDown ? (
                <div className={styles.shutDownCont}>
                <p>You have left reality...</p>
                <p>Are you looking for something?...</p>
                <p>Isnt everybody?...</p>
                <button onClick={() => setisShutdown(false)}><AiOutlineReload style={{color: "green", fontWeight: "800"}} /> RESTART</button>
            </div>
            ): (
            <Draggable>
            <div className={styles.container}>
                <div className={styles.titleBar}>
                <p>
                    <img src="/images/warning.png" />
                    Shutting Down...
                </p>                
                </div>
                
                
                    {
                        !timeLeft ? (
                            <p>Bye bye</p>
                        ): (
                            <p>Shutting down in {timeLeft} seconds...</p>
                        )
                    }
            </div>
        </Draggable>
            )
        }
        </>
        
    )
}

export default Warning;