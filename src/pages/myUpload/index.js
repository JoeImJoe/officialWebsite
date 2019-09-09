import React, { useState, memo } from "react"
import Link from 'umi/link';
import UserLayout from "../../layouts/userLayout"
const myCase = memo(({ ...props }) => {
    return (
        <UserLayout>
            <div>我是 我的上传
               <Link to={"/myUpload/form"}> 跳表单测试</Link>
            </div>
        </UserLayout>
    )
})
export default myCase