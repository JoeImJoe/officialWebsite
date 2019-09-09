import React, { memo } from "react"
import styles from "./style.less"

const block = memo(({ ...props }) => {
    const { list = [], title, selected = {}, show } = props

    if (show==false) {
        return null
    }
    return (<li style={{ marginBottom: 16 }}>
        {title ? <li className={styles.liTitle}>{title}</li> : null}
        {list.map(item => {
            return <li onClick={props.onClick.bind(null, item)} key={item.path}
                className={`${styles.liitem} ${item.path == selected.path ? styles.selectedLi : ""}`}>{item.breadcrumb}</li>
        })}
    </li>)

})
export default block