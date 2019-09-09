import React, { useState, memo } from "react"
// import Link from 'umi/link';
import FormLayout from "../../layouts/formLayout"
import { Button } from "antd"
const myCase = memo(({ ...props }) => {
    const [test, setTest] = useState("fff")

    const click = () => {
        setTest("ttt")
    }
    return (
        <FormLayout>
            <div>我是 上传表单

              <Button onClick={click}>test</Button>
            </div>
        </FormLayout>
    )
})
export default myCase