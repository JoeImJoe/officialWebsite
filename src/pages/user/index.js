import React, { useState, memo } from "react"
import styles from "./style.less"
import router from 'umi/router';
import person from "../../assets/userIcon/person.png"
import box from "../../assets/userIcon/box.png"
import list from "../../assets/userIcon/list.png"
import { Card, Avatar, Row, Col } from "antd"
const user = memo(({ ...props }) => {

    return (
        <div>
            <Card bodyStyle={{ padding: 16 }} className={styles.headCard} bordered={false} >
                <div className={styles.headArea}>
                    <div style={{ marginRight: 24 }}>
                        <Avatar size={64}></Avatar>
                        <div style={{ textAlign: "center" }}>修改头像</div>
                    </div>
                    <div style={{ marginBottom: 8 }}>
                        <div style={{ marginBottom: 16 }}>人名</div>
                        <div>
                            <span className={styles.moneyBefo}>沃特币：</span>
                            <span className={styles.money}>1000</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={styles.centerCard} bordered={false} >
                <Row gutter={8} type="flex" align="middle" justify="space-between">
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={list} size={"large"}></Avatar>
                    </Col>
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={person} size={"large"}></Avatar>
                    </Col>
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={list} size={"large"}></Avatar>
                    </Col>
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={box} size={"large"}></Avatar>
                    </Col>
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={box} size={"large"}></Avatar>
                    </Col>
                    <Col span={4} style={{textAlign:"center"}}>
                        <Avatar src={list} size={"large"}></Avatar>
                    </Col>
                </Row>
            </Card>
        </div>
    )
})
export default user