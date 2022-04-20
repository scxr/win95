import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Taskbar from './Components/TaskBar/Taskbar'
import Warning from './Components/Shutdown/Shutdown'
import Main from './Components/Main/MainPage'
import { useState } from 'react'
export default function Home() {
  const [isShutdown, setIsShutdown] = useState(false)
  function handleShutdown(v) {
    if (v === "sd") {
      setIsShutdown(true)
    } else if(v==="rb") {
      setIsShutdown(false)
    }
  }
  return (
    <>
    {
      isShutdown ? (null):(<Main />)
    }
    
    <Taskbar handleShutdown={handleShutdown}/>
    </>
  )
}
