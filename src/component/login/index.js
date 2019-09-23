import React, { useState, memo } from "react"
// import Link from 'umi/link';
import styles from "./style.less"
// import FormLayout from "../../layouts/formLayout"
import { Button, Modal, Input, Row, Form, Col, Icon, Checkbox } from "antd"
const FormItem = Form.Item;
const LoginModal = memo(({ ...props }) => {
    const { getFieldDecorator, setFieldsValue, validateFieldsAndScroll } = props.form;
    const login = (e) => {
        e.preventDefault();
        validateFieldsAndScroll((err, values) => {
            if (err) return
            setFieldsValue({ password: '' })

        })
    }
    const logInRenden = (<Row type="flex" align="top" justify="space-around">
        <Col span={18}>
            <Form >

                <FormItem colon={false} hasFeedback>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名/手机号' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名/手机号" />
                    )}
                </FormItem>

                <FormItem colon={false}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>

                <FormItem colon={false}  >
                    <div onClick={() => { }} id="checkimg" className={styles.cursor} style={{ float: 'left', height: '34px', width: '50%', zindex: 99999 }}>

                    </div>
                    {getFieldDecorator('checknum', {
                        rules: [{ required: true, len: 4, message: <div style={{ float: 'right', height: '34px', width: '50%', }}>请输入4位验证码!</div> }],
                    })(
                        <Input style={{ width: '50%', float: 'left' }} placeholder="验证码" />
                    )}

                </FormItem>
                <div style={{ overflow: 'hidden', marginBottom: 32 }}>
                    <Checkbox className={styles.fl}>记住我</Checkbox>
                    <span className={`${styles.fr} ${styles.cursor}`}>忘记密码</span>
                </div>
                <div style={{ overflow: 'hidden', marginBottom: 16 }}>
                    <div style={{ float: 'right', marginRight: 32 }} >
                        <Button style={{ width: 128, marginRight: 8 }} size="large"
                            onClick={login}
                            type="primary">
                            登录</Button>
                        <span className={`${styles.greyColor} ${styles.cursor}`}>短信验证登录</span>
                    </div>

                </div>

            </Form>

        </Col>
        <Col offset={1} span={22} className={styles.loginFooter}>
                    <span onClick={()=>{}}>QQ</span>
                    <span onClick={()=>{}}>wechat</span>
        </Col>
    </Row>)
    const signInRenden = (
        <Row type="flex" align="top" justify="space-around">
            <Col span={18}>
                <Form >

                    <FormItem colon={false} hasFeedback>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '不符合规则' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名(英文、数字，最长12个字符)" />
                        )}
                    </FormItem>

                    <FormItem colon={false}>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入手机号' }],
                        })(
                            <Input prefix={<Icon type="mobile" style={{ fontSize: 13 }} />} placeholder="手机号" />
                        )}
                    </FormItem>

                    <FormItem colon={false}  >

                        {getFieldDecorator('checknum', {
                            rules: [{ required: true, len: 4, message: <div style={{ float: 'right', height: '34px', width: '50%', }}>请输入4位验证码!</div> }],
                        })(
                            <Input style={{ width: '50%', float: 'left' }} placeholder="验证码" />
                        )}
                        <div className={`${styles.cursor} ${styles.yzmBox}`} onClick={() => { }} id="checkimg" style={{ float: 'left',textAlign:'center', width: '40%', zindex: 99999 }}>
                            <a>接受验证码</a>
                        </div>
                    </FormItem>
                    <div style={{ overflow: 'hidden', marginBottom: 32 }}>
                        <Checkbox className={styles.fl}><span>阅读并接受</span> <a>《广州数夫科技有限公司条例》</a></Checkbox>
                    </div>
                    <div style={{ overflow: 'hidden', marginBottom: 16 }}>
                        <div style={{margin:'0 auto',width:128 }} >
                            <Button style={{ width: 128, marginRight: 8 }} size="large"
                                onClick={login}
                                type="primary">
                                注册</Button>
                        </div>

                    </div>

                </Form>
            </Col>
        </Row>
    )
    return (
        <Modal
            footer={null}
            width={"35%"}
            {...props}>
            <div>
                <div className={`${styles.title}  ${styles[props.active]} ${styles.cursor}`}>
                    <span onClick={e => props.setActive("activeOne")}>登录</span>
                    <span onClick={e => props.setActive('activeTwo')}>注册</span>
                </div>
            </div>
            {props.active==="activeTwo"?signInRenden:logInRenden}
        </Modal>

    )
})
export default Form.create()(LoginModal)