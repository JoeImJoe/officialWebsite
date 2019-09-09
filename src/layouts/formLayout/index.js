import React, { memo } from "react"
import styles from "./style.less"
import Bread from "../../component/bread"
const formLayout = memo(({ ...props }) => {
    return (<div className={styles.layout}>
        <div className={styles.formarea}>
            <Bread></Bread>
            {props.children}
        </div>

    </div>)

})
export default formLayout