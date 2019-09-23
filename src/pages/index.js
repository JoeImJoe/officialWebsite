import styles from './index.less';
import React, { useState, memo, useEffect } from "react"
// import router from 'umi/router';
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import { Carousel } from "antd"
const indexpage = memo(({ ...props }) => {
  useEffect(() => {
    // router.push("/")
  }, [])
  return (
    <div>
      <Carousel autoplay={true}
        className={styles.allwh} dotPosition={"right"}>
        <div>
          <img className={styles.allwh} src={pic1}></img>
        </div>
        <div>
          <img className={styles.allwh} src={pic2}></img>
        </div>
        <div>
          <img className={styles.allwh} src={pic3}></img>
        </div>
        <div>
          <img className={styles.allwh} src={pic4}></img>
        </div>
      </Carousel>
    </div>
  );
})
export default indexpage
