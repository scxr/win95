import styles from "./main.module.css"
import TextWindow from "../TextWindow/textWindow";
import Draggable from "react-draggable";
import { useState } from "react";
import Inf from "../ComputerInfo/ComputerInfo";
const Main = () => {
    const [showMissionTxt, setShowMissionTxt] = useState(false)
    const [showRm, setShowRm] = useState(false)
    const [clickedRm, setClickedRm] = useState(false)
    const [clickedM, setClickedM] = useState(false)
    const [clickedInfo, setClickedInfo] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    function handleClose (value) {
        if (value==="close") {
            setShowMissionTxt(false)
        }
    }
    function handleCloseRm (value) {
        if (value==="close") {
            setShowRm(false)
        }
    }

    function handleCloseInf (value) {
        if (value==="close") {
            setShowInfo(false)
        }
    }
    return (
        <div className={styles.icons}>
            {
                showInfo ? (
                    <Inf handleClose={handleCloseInf}/>
                ): (
                    null
                )
            }
            
            {
                showMissionTxt ? (
                    <TextWindow title={"mission.txt"} handleClose={handleClose}/>
                ) : (null)
            }
            {
                showRm ? (
                    <TextWindow title={"roadmap.txt"} handleClose={handleCloseRm}/>
                ) : (null)
            }
            
            <div className={styles.icon} onClick={()=>{
                
                if (clickedInfo) {
                    setShowInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                    setClickedInfo(false)

                    
                } else {
                    setClickedInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                }
                
            
        }}>
                <img src="/images/MyComputer.png" />
                <p style={clickedInfo ? {color: "blue"}:null}>My Computer</p>
            </div>
            <div className={styles.icon} 
            onClick={()=>{
                
                    if (clickedM) {
                        setShowMissionTxt(true)
                        setClickedRm(false)
                        setClickedM(false)
                        setClickedInfo(false)

                        
                    } else {
                        setClickedM(true)
                        setClickedRm(false)
                        setClickedInfo(false)
                    }
                    
                
            }}
            >
                <img src="/images/Notepad.png" />
                <p style={clickedM ? {color: "blue"}:null}>mission.txt</p>
            </div>
            <div className={styles.icon} 
                onClick={()=>{
                    if (clickedRm) {
                        setShowRm(true)
                        setClickedM(false)
                        setClickedRm(false)
                        setClickedInfo(false)

                        
                    } else {
                        setClickedRm(true)
                        setClickedM(false)
                        setClickedInfo(false)

                    }
                    
                }}

            >
                <img src="/images/Notepad.png" />
                <p style={clickedRm ? {color: "blue"}:null}>roadmap.txt</p>
            </div>

            
        </div>
    )
}

export default Main;