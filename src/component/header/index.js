import React, { useState, memo } from "react"
import { Avatar, Input, Dropdown, Menu, Modal } from "antd"
import router from 'umi/router';
import logo from "../../assets/logo.png"
import styles from "./style.less"
const { confirm } = Modal;
const header = memo(({ ...props }) => {
    const go = (e) => {
        let key = e.key
        if (key == "user") {
            router.push('/user');
        }
        else if (key === "logout") {
            confirm({
                title: '提示',
                content: '确定退出吗',
                onOk: () => {
                    router.push("/")
                },
                onCancel: () => { return }
            });
        }

    }
    const downMenu = (
        <Menu>
            <Menu.Item>
                客户端下载
                </Menu.Item>
        </Menu>
    )
    const userMenu = (
        <Menu onClick={go}>
            <Menu.Item>
                这里放用户名
            </Menu.Item>
            <Menu.Item key="user">
                <div>用户中心</div>
            </Menu.Item>
            <Menu.Item>
                <div>账号设置</div>
            </Menu.Item>
            <Menu.Item>
                <div>我的方案</div>
            </Menu.Item>
            <Menu.Item key="logout">
                <div>退出登录</div>
            </Menu.Item>
        </Menu>
    )
    return <div className={styles.header}>
        <div className={styles.left}>
            <div><img src={logo}></img></div>
            <div><span>首页</span></div>
            <div><span>优秀设计</span></div>
            <div><span>约设计</span></div>
            <div><span>成长大学</span></div>
            <div><span>社区</span></div>
            <div><span>行业百科</span></div>
            <div>
                <Dropdown trigger={['hover', 'click']} overlay={downMenu}>
                    <span>
                        软件下载
                </span>
                </Dropdown>
            </div>
            <div><span>帮助中心</span></div>
            <div>
                <Input.Search placeholder="输入你想查找的关键字"></Input.Search>
            </div>
        </div>
        <div className={styles.right}>
            <div>
                <Dropdown trigger={['hover', 'click']} overlay={userMenu}>
                    <span className={`${styles.rightFont} ${styles.borderLine}`}>
                        <Avatar size={32} style={{ marginRight: 8 }} />登录</span>
                </Dropdown>
                <span className={styles.rightFont}>注册</span>

            </div>

        </div>
    </div>
})
export default header