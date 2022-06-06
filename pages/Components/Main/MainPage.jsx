import styles from "./main.module.css"
import TextWindow from "../TextWindow/textWindow";
import Draggable from "react-draggable";
import { useState } from "react";
import Inf from "../ComputerInfo/ComputerInfo";
import Warning from "../Warning/Warning";
import Router from 'next/router'
import {AiFillFileImage} from "react-icons/ai"
import ImageWindow from "../ViewImage/viewImage";
import Eyes from "../Eyes/Eyes";
import {useMinimise} from "../../context/minimisedStore"
import Roadmap from "../Roadmap/Roadmap";
import Faq from "../FAQ/Faq"
const Main = (props) => {
    const router = Router
    const [showMissionTxt, setShowMissionTxt] = useState(false)
    const [showRm, setShowRm] = useState(false)
    const [clickedRm, setClickedRm] = useState(false)
    const [clickedM, setClickedM] = useState(false)
    const [clickedInfo, setClickedInfo] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [clickedPaint, setClickedPaint] = useState(false)
    const [showPaint, setShowPaint] = useState(false)
    const [clickedImage1, setClickedImage1] = useState(false)
    const [showImage1, setShowImage1] = useState(false)
    const [showFaq, setShowFaq] = useState(false)
    const [clickedFaq, setClickedFaq] = useState(false)
    const [state, actions] = useMinimise()
    function handleClose (value) {
        if (value==="close") {
            setShowMissionTxt(false)
            actions.rmMin("mission.txt", "")
        }
    }
    function handleCloseRm (value) {
        if (value==="close") {
            setShowRm(false)
            actions.rmMin("roadmap.txt", "")
        } else if (value="min") {
            console.log("minimiser")
        }
    }

    function handleCloseInf (value) {
        if (value==="close") {
            setShowInfo(false)
            actions.rmMin("ComputerInfo", "")
        } else if (value="min") {
            console.log("minimiser")
            //actions.addMin("sdalksdklasdk", "images/Notepad.png")
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

    function viewImgHandler(value) {
        if (value === "close") {
            setShowImage1(false)
            actions.rmMin("image#0001", "")
        }else if (value="min") {
            console.log("minimiser")
            //actions.addMin("sdalksdklasdk", "images/Notepad.png")
        }
    }

    function viewFaqHandler(value) {
        if (value === "close") {
            setShowFaq(false)
            actions.rmMin("faq", "")
        }else if (value="min") {
            console.log("minimiser")
            //actions.addMin("sdalksdklasdk", "images/Notepad.png")
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
                    <Roadmap title={"roadmap.txt"} handleClose={handleCloseRm} />
                ) : (null)
            }
            {
                showPaint ? (
                    <Warning title={"paint.txt"} handleClose={handleClosePaint} redirector={paintHandler} warningCont="Clicking this will redirect you to /paint"/>
                ) : (null)
            }
            {
                showImage1 ? (
                    <ImageWindow handleClose={viewImgHandler} img={"./images/paint.gif"} title={"image#0001"}/>
                ) : ( 
                    null
                )
            }
            {
                showFaq ? (
                    <Faq handleClose={viewFaqHandler} title="faq" img={""}/>
                ) : (
                    null
                )
            }
            <div className={styles.icon} onClick={()=>{
                
                if (clickedInfo) {
                    setShowInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                    setClickedInfo(false)
                    setClickedPaint(false)
                    setClickedImage1(false)
                    setClickedFaq(false)
                } else {
                    setClickedInfo(true)
                    setClickedRm(false)
                    setClickedM(false)
                    setClickedPaint(false)
                    setClickedImage1(false)
                    setClickedFaq(false)
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
                        setClickedImage1(false)
                        setClickedFaq(false)
                    } else {
                        setClickedM(true)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        setClickedImage1(false)
                        setClickedFaq(false)
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
                        setClickedImage1(false)
                        setClickedFaq(false)
                    } else {
                        setClickedRm(true)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        setClickedImage1(false)
                        setClickedFaq(false)
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
                        setClickedImage1(false)
                        setClickedFaq(false)
                    } else {
                        setClickedPaint(true)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedRm(false)
                        setClickedImage1(false)
                        setClickedFaq(false)
                    }
                    
                }}>
                <img src="/images/paint.gif" style={{width: "50px"}} />
                <p style={clickedPaint ? {color: "blue"}:null}>paint</p>
                
            </div>
            <div className={styles.icon} onClick={() => {
                
                
                    console.log("CLICKED")
                    if (clickedFaq) {
                        setShowFaq(true)
                        setClickedM(false)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        setClickedImage1(false)
                        setClickedPaint(false)
                        setClickedFaq(false)
                        
                    } else {
                        setClickedFaq(true)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedRm(false)
                        setClickedImage1(false)
                        setClickedPaint(false)
                    }
                    
                }
            }>
                <img src="/images/help.jpg" style={{width: "50px"}} />
                <p style={clickedFaq ? {color: "blue"}:null}>FAQ</p>
            </div>

            <div className={styles.images}>
            <div className={styles.icon}                 
            onClick={()=>{
                    if (clickedImage1) {
                        setShowImage1(true)
                        setClickedM(false)
                        setClickedRm(false)
                        setClickedInfo(false)
                        setClickedPaint(false)
                        setClickedPaint(false)
                        setClickedFaq(false)

                        
                    } else {
                        setClickedPaint(false)
                        setClickedM(false)
                        setClickedInfo(false)
                        setClickedRm(false)
                        setClickedImage1(true)
                        setClickedFaq(false)

                    }
                    
                }}>
                <AiFillFileImage size={50}/>
                <p style={clickedImage1 ? {color: "blue"}:null}>image#801</p>
            </div>
            
            </div>
                
        </div>
    )
}

export default Main;