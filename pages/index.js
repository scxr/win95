import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Taskbar from './Components/TaskBar/Taskbar'
import Warning from './Components/Shutdown/Shutdown'
import Main from './Components/Main/MainPage'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import Router from "next/router"
import Warn from './MobileComponents/Warning/Warn'
export const Minimised = createContext([{}])

function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}


export default function Home() {
  const router = Router
  const [isShutdown, setIsShutdown] = useState(false)
  const { height, width } = useWindowDimensions();
  const [tooSmall, setTooSmall] = useState(false)
  const [stay, setStay] = useState(false)
  const minimised = useContext(Minimised)
  function stayOn() {
      setStay(true)
  }

  function leave() {
    router.push("/mobile")
  }
  function handleShutdown(v) {
    if (v === "sd") {
      setIsShutdown(true)
    } else if(v==="rb") {
      setIsShutdown(false)
    }
  }

  useEffect(() => {
    console.log(height, width)
    if (height < 640 || width < 1100) {
      setTooSmall(true)
      console.log("smol")
    } else {
      setTooSmall(false)
    }
  }, [height, width])

  const handleContext = useCallback(
    (e) => {
      e.preventDefault()
      alert("lol")
    },[]
  )

  function addTaskBar(name, loc) {
    console.log("MINIMIZYA")
    //setMinimised({"title": name, "img": loc})
    minimised.push({title:name, img: loc})
    
  }

  useEffect(() => {
    document.addEventListener("contextmenu", handleContext);
  }, []);
  return (
    <>
    {
      isShutdown ? (null):(<Main minimiseHandler={addTaskBar}/>)
    }

    {
      tooSmall &&  !stay? (
        <Warn handleStay={stayOn} handleLeave={leave}/>
      ) : (null)
    }
    
    <Taskbar handleShutdown={handleShutdown} />
    </>
  )
}
