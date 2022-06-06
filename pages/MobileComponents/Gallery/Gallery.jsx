import styles from "./gallery.module.css"

const Gallery = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.item}>
                <img src="images/paint.gif" />
                <p>img#0001</p>
            </div>

            <div className={styles.item}>
                <img src="images/paint.gif" />
                <p>img#0001</p>
            </div>
        </div>
    )
}

export default Gallery;