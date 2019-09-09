import React, { memo, useState } from "react"
import styles from "./style.less"
import Block from "./block"
import router from 'umi/router';
import routeList from "../routerArr"
import { connect } from "dva"

const menu = memo(({ ...props }) => {
    // const [selected, setSelected] = useState({})

    const clickItem = (data) => {
        // setSelected(data)
        router.push(data.path)
    }
console.log(props.nowActRouter)
    return (<div className={styles.menuArea}>
        <div style={{ padding: 16 }}>
            <div className={styles.title}>个人中心</div>
        </div>

        <ul className={styles.ul} >
            {routeList.map((item,index) => {
                return <Block key={index} selected={props.nowActRouter.match} title={item.breadcrumb} show={item.show}
                    onClick={clickItem} list={item.children}></Block>
            })}
        </ul>
    </div>)

})
function mapStateToProps(state) {
    return {
        nowActRouter: state.nowActRouter
    }
}
export default connect(mapStateToProps)(menu)