import React, { memo } from "react"
import styles from "./style.less"
import Menu from "../../component/menu"
import Bread from "../../component/bread"
const userLayout = memo(({ ...props }) => {
    return (<div className={styles.layout}>
        <div className={styles.leftMenu}>
            <Menu></Menu>
        </div>
        <div className={styles.rightArea}>
            <div style={{display:"none"}}><Bread></Bread></div>
            {props.children}
        </div>
    </div>)

})
export default userLayout