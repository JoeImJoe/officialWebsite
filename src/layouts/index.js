import styles from './index.less';
import React from "react"
import Header from "../component/header"
import Footer from "../component/footer"
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
function BasicLayout(props) {
  return (
    <ConfigProvider locale={zhCN}>
      <Header></Header>
      <div className={styles.container}>
        {props.children}
      </div>
      <Footer />
    </ConfigProvider>
  );
}

export default BasicLayout;
