import React, { useState, memo } from "react"
import { Button, Form, Col, Row, Input } from "antd"
const FormItem = Form.Item;
const searchCom = memo(({ ...props }) => {

    const getFields = () => {
        const { searchlist, expandnum } = props;

        const { getFieldDecorator } = props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        };
        let children = [];
        (searchlist || []).forEach((item, index) => {
            children.push(
                <Col key={item.id + 'col'} span={6} >
                    <FormItem colon={false} {...formItemLayout}
                    style={{height:40,overflow:'hidden',marginBottom:16}}
                    key={item.id + 'formitem'} label={item.title}>
                        
                        {getFieldDecorator(`${item.id}`, { initialValue: undefined, rules: [{ required: item.required ? item.required : false, message: '必填搜索项' }], })(
                            <Input key={item.id} placeholder={item.tip === "" || item.tip === undefined ? '请输入' : item.tip} />
                            //
                        )}
                    </FormItem>
                </Col>
            );
        })

        children.push(<Col span={6} key={children.length + 'col'}  >
            <Button type="primary" htmlType="submit" style={{ margin: '2px 0 0 32px' }} loading={props.loadingFlag}>搜索</Button>
        </Col>)

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
export default Form.create()(searchCom) 