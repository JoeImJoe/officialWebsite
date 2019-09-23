import React, { useState, memo } from "react"
import { Button, Form, Col, Row, DatePicker } from "antd"
const FormItem = Form.Item;
const dataCom = memo(({ ...props }) => {
    const [btnOne,setBtnOne] = useState(false);
    const [btnTwo,setBtnTwo] = useState(false);
    const [btnThree,setBtnThree] = useState(false);
    const setbtn=(num)=>{
        if(num===1){
            setBtnOne(!btnOne)
            setBtnTwo(false);
            setBtnThree(false)
        }else
        if(num===2){
            setBtnOne(false)
            setBtnTwo(!btnTwo);
            setBtnThree(false)
        }else{
            setBtnOne(false)
            setBtnTwo(false);
            setBtnThree(!btnThree)
        }
        
    }
    const getFields = () => {
        const { dateCode } = props;

        const { getFieldDecorator } = props.form;
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 18 },
        };
        let children = [],style={marginLeft:12};
        children.push(
            <Col  span={18} >
                <FormItem colon={false} 
                style={{height:40,overflow:'hidden',marginBottom:16}}
                {...formItemLayout} label='创建时间'>
                    {getFieldDecorator(`${dateCode}`, {
                         initialValue: undefined, rules: [
                            ],
                         })(
                            <DatePicker.RangePicker style={{ width: '50%', float: 'left' }}/>
                    )}
                    <div style={{ width: '50%', float: 'left',display:'flex'}}>
                        <Button type={btnOne?'primary':null} 
                        onClick={e=>setbtn(1)}
                        style={style}>最近7天</Button>
                        <Button type={btnTwo?'primary':null}
                        onClick={e=>setbtn(2)}
                        style={style}>近三个月</Button>
                        <Button type={btnThree?'primary':null} 
                        onClick={e=>setbtn(3)}
                        style={style}>近一年</Button>
                    </div>
                </FormItem>
            </Col>
        );



        return children;
    }
    return (
        <Form
            onSubmit={props.handleSearch}
        >
            <Row>{getFields()}</Row>
        </Form>

    )
})
export default Form.create()(dataCom) 