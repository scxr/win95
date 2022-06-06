import styles from "./warn.module.css"

const Warn = (props) => {
    console.log("Props: ", props)
    return (
        <div className={styles.parent}>
            <p>This site is not designed for this window site</p>
            <p>To be redirected to a mobile substitute click leave</p>
            <p>To stay anyway click stay</p>
            <div className={styles.btns}>
                <button onClick={()=>{
                    props.handleStay()
                }}>Stay</button>
                <button onClick={()=>{
                    props.handleLeave()
                }}>Leave</button>
            </div>
        </div>
    )
}

export default Warn