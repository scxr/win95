import styles from "./taskbar.module.css"
import {SiWindows95} from "react-icons/si"
import Clock from 'react-live-clock';

const Taskbar = () => {
    return (
        <div className={styles.taskBar}>
            
            <button>
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

export default Taskbar;