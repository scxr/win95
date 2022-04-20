import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Taskbar from './Components/TaskBar/Taskbar'
import Warning from './Components/Shutdown/Shutdown'
export default function Home() {
  return (
    <>
    <Taskbar />
    </>
  )
}
