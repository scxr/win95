import styles from "../styles/paint.module.css"
import Router from 'next/router'
export default function paint() {
    const router = Router
    return (
        <div className={styles.parent}>
        <p>this is not ready yet. patience is a virtue</p>
        <button onClick={()=>Router.push("/")}>go home.</button>
        </div>
    )
}