import React, {  memo } from "react"
// import { Row, Col } from "antd"
import styles from "./style.less"
const footer = memo(({ ...props }) => {
    return (
        <div className={styles.area}>
            <div className={styles.row}>
                <div>网站首页</div>
                <div>数夫简介</div>
                <div>数夫ERP系列产品</div>
                <div>数夫CRM系列产品</div>
                <div>意见反馈</div>
                <div>关于我们</div>
            </div>
            <div className={styles.row}>
                <div>
                    Copyright © 1999-2014
                </div>
                <div>粤ICP备07004079号</div>
            </div>
            <div className={styles.row}>
                广州数夫软件科技有限公司 All Rights Reserved 版权所有
            </div>
        </div>
    )
})
export default footer