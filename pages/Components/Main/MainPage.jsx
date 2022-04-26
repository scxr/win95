import styles from "./main.module.css"
import TextWindow from "../TextWindow/textWindow";
import Draggable from "react-draggable";
import { useState } from "react";
import Inf from "../ComputerInfo/ComputerInfo";
import Warning from "../Warning/Warning";
import Router from 'next/router'

const Main = () => {
    const router = Router
    const [showMissionTxt, setShowMissionTxt] = useState(false)
    const [showRm, setShowRm] = useState(false)
    const [clickedRm, setClickedRm] = useState(false)
    const [clickedM, setClickedM] = useState(false)
    const [clickedInfo, setClickedInfo] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [clickedPaint, setClickedPaint] = useState(false)
    const [showPaint, setShowPaint] = useState(false)
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
    function handleClosePaint (value) {
        if (value==="close") {
            setShowPaint(false)
        }
    }

    function paintHandler(value) {
        if (value === "change") {
            Router.push("/paint")
        } else {
            setShowPaint(false)
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
            {
                showPaint ? (
                    <Warning title={"paint.txt"} handleClose={handleClosePaint} redirector={paintHandler} warningCont="Clicking this will redirect you to /paint"/>
                ) : (null)
            }
            <div className={styles.icon} onClick={()=>{
                
                if (clickedInfo) {
                    setShowInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                    setClickedInfo(false)
                    setClickedPaint(false)

                    
                } else {
                    setClickedInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                    setClickedPaint(false)
                }
                
            
        }}>
                <img src="/images/GLITCH_COMPUTER.gif" />
                <p style={clickedInfo ? {color: "blue"}:null}>My Computer</p>
            </div>
            <div className={styles.icon} 
            onClick={()=>{
                
                    if (clickedM) {
                        setShowMissionTxt(true)
                        setClickedRm(false)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        
                    } else {
                        setClickedM(true)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                    }
                    
                
            }}
            >
                <img src="/images/NOTEPAD.gif" />
                <p style={clickedM ? {color: "blue"}:null}>mission.txt</p>
            </div>
            <div className={styles.icon} 
                onClick={()=>{
                    if (clickedRm) {
                        setShowRm(true)
                        setClickedM(false)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        
                    } else {
                        setClickedRm(true)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedPaint(false)

                    }
                    
                }}

            >
                <img src="/images/NOTEPAD.gif" />
                <p style={clickedRm ? {color: "blue"}:null}>roadmap.txt</p>
            </div>

            <div className={styles.icon}                 
            onClick={()=>{
                    if (clickedPaint) {
                        setShowPaint(true)
                        setClickedM(false)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)

                        
                    } else {
                        setClickedPaint(true)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedRm(false)

                    }
                    
                }}>
                <img src="/images/paint.gif" style={{width: "50px"}} />
                <p style={clickedPaint ? {color: "blue"}:null}>paint</p>
            </div>
        </div>
    )
}

export default Main;