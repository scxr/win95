import styles from "./taskbar.module.css"
import {SiWindows95} from "react-icons/si"
import Clock from 'react-live-clock';
import { useState } from "react";
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {AiOutlineReload} from "react-icons/ai"
const Taskbar = () => {
    const [showStart, setShowStart] = useState(false)
    const [isShutDown, setShutDown] = useState(false)
    return (
        
        <div className={styles.parent}>
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
                showStart & !isShutDown &&
                <div className={styles.startMenu}>
                <div className={styles.sideBar}>
                    <h1>Im sorry mother</h1>
                </div>
                <p onClick={() => setShutDown(true)}> 
                   <img src="/images/ShutDown.png" /> Shut Down
                </p>
                <p onClick={() => setShutDown(true)}><img src="/images/ShutDown.png" /> Shut Down</p>
                <p onClick={() => setShutDown(true)}><img src="/images/ShutDown.png" /> Shut Down</p>
                <p onClick={() => setShutDown(true)}><img src="/images/ShutDown.png" /> Shut Down</p>
                <hr />
                <p onClick={() => setShutDown(true)}><img src="/images/ShutDown.png" /> Shut Down</p>
            </div>
            }
            
           
        </div>
    )
}

export default Taskbar;