import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import React, { memo, useEffect } from "react"
import router from 'umi/router';
import styles from './style.less';
import { Icon } from "antd"
import routeList from "../routerArr"
import { connect } from "dva"

const formatArr = (arr, list) => {
    for (let item of list) {
        if (item.path) {
            arr.push(item)
        }
        let children = item.children || []
        if (children.length > 0) {
            formatArr(arr, children)
        }
    }
}
const formatList = () => {
    let arr = []
    formatArr(arr, routeList)
    return arr
}
const routes = formatList()
const Breadcrumbs = memo(({ breadcrumbs, ...props }) => {
    // console.log(breadcrumbs[breadcrumbs.length - 1])
    const linkTo = (bread) => {
        router.push(bread.match.path)
    }

    useEffect(() => {
        let last = breadcrumbs[breadcrumbs.length - 1]
        props.dispatch({
            type: "nowActRouter/set",
            payload: last
        })
    }, [breadcrumbs])

    return (
        <div style={{ padding: 8 }}>
            <div className={styles.breadArea}>
                {breadcrumbs.map(({ ...bread }, index) => {
                    let last = index === breadcrumbs.length - 1//是否最后一条
                    if (index == 0) {
                        return ""
                    }
                    return (<span key={bread.key}>
                        <span style={{ cursor: last ? "" : "pointer" }} className={styles.linkSpan}
                            onClick={!last ? linkTo.bind(null, bread) : null}>{bread.breadcrumb}</span>
                        {!last ? <Icon style={{ marginRight: 16 }} type="right"></Icon> : ""}
                    </span>)

                })}
            </div>
        </div>)
})
function mapStateToProps(state) {
    return {
        nowActRouter: state.nowActRouter
    }
}

export default withBreadcrumbs(routes)(connect(mapStateToProps)(Breadcrumbs));