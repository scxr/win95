import styles from "./taskbar.module.css"
import {SiWindows95} from "react-icons/si"
import Clock from 'react-live-clock';
import { useState, useEffect } from "react";
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {AiOutlineReload} from "react-icons/ai"
import Draggable from 'react-draggable'; // The default

const Taskbar = () => {
    const [showStart, setShowStart] = useState(false)
    const [isShutDown, setShutDown] = useState(false)
    const [timeLeft, setTimeLeft] = useState(null);
    const [isShuttingDown, setIsShuttingDown] = useState(false)
    useEffect(() => {
        
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           setTimeLeft(null)
           
           
           setTimeout(function() {
               setIsShuttingDown(false)
            setShutDown(true)
           }, 1000)
        }
    
        // exit early when we reach 0
        if (!timeLeft) {return} else setIsShuttingDown(true);
    
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
        
        <div className={styles.parent}>
            {
                isShuttingDown ? (
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
                ) : (
                    null
                )
            }
            {
                isShutDown ? (
                    <div className={styles.shutDownCont}>
                        <p>You have left reality...</p>
                        <p>Are you looking for something?...</p>
                        <p>Isnt everybody?...</p>
                        <button onClick={() => setShutDown(false)}><AiOutlineReload style={{color: "green", fontWeight: "800"}} /> RESTART</button>
                    </div>
                ) : (
                    <div className={styles.taskBar}>
                
                    <button onClick={() => setShowStart(!showStart)}>
                        <div className={styles.start}>
                            <img src="/images/start.png" style={{paddingTop: "1px"}}/> 
                            <span style={{fontSize: "20px", fontWeight: "600"}}> Start</span>
                        </div>
                        
                    </button>
                    <div className={styles.timer}>
                        <Clock
                        format={'h:mmA'}
                        style={{fontSize: '1em'}}
                        ticking={true} />
                    </div>
                    
                </div>
                )
            }
            {
                showStart & !isShutDown  &&
                <div className={styles.startMenu}>
                <div className={styles.sideBar}>
                    <h1>Im sorry mother</h1>
                </div>
                <p onClick={() => {setTimeLeft(5);setShowStart(false)}}> 
                   <img src="/images/ShutDown.png" /> Shut Down
                </p>
                <p onClick={() => {setTimeLeft(5);setShowStart(false)}}><img src="/images/ShutDown.png" /> Shut Down</p>
                <p onClick={() => {setTimeLeft(5);setShowStart(false)}}><img src="/images/ShutDown.png" /> Shut Down</p>
                <p onClick={() => {setTimeLeft(5);setShowStart(false)}}><img src="/images/ShutDown.png" /> Shut Down</p>
                <hr />
                <p onClick={() => {setTimeLeft(5);setShowStart(false)}}><img src="/images/ShutDown.png" /> Shut Down</p>
            </div>
            }
            
           
        </div>
    )
}

export default Taskbar;