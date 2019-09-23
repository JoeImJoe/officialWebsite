import React, { useState, memo, useEffect } from "react"
import { Card, Col, Row, Pagination, Checkbox, Icon } from "antd"
import styles from './style.less'
const Meta = Card.Meta;
const cardCom = memo(({ ...props }) => {
    
    const [allChecked, setAllChecked] = useState(false)
    const {datasource,setDatasource} = props
    
   
    const getHeight = () => document.body.clientHeight-469
    const detail = () => {

    }
    const allCheck=()=>{
        let arr = [...datasource.data], data = [];
        arr.forEach(it => {
                it.checked = !Boolean(allChecked)
                data.push(it)
        });
        setAllChecked(!Boolean(allChecked))
        setDatasource({ data, total: data.length })
    }
    return (
        <React.Fragment >
            <div style={{margin:'8px 16px'}}>
                <Checkbox checked={allChecked} onClick={allCheck}>全选</Checkbox>
                <span className={styles.cursor}><Icon type="delete" />删除</span>
                <span className={styles.fr}>查询出 85 条记录</span>
            </div>
            <div className="mb-8" style={{ height: getHeight() + "px", overflowY: 'scroll' }} >
                <Row className={styles.imgTable} >
                    {datasource.data.length > 0 ?
                        datasource.data.map((item, index) => {
                            return (
                                <Col span={4} style={{margin:'0 16px'}}>
                                <Card
                                    hoverable
                                    style={{ width: 200, padding: 0, marginBottom: 16 ,border:'none'}}
                                    bodyStyle={{ padding: '16px 4px' }}
                                    cover={
                                        <div className={styles.imgBox}
                                            onClick={() => {
                                                let arr = [...datasource.data], data = [];
                                                arr.forEach(it => {
                                                    if (it.id !== item.id) {
                                                        data.push(it)
                                                    } else {
                                                        it.checked = !Boolean(it.checked)
                                                        if(!Boolean(it.checked)){
                                                            setAllChecked(false)
                                                        }
                                                        data.push(it)
                                                    }
                                                })
                                                if(!data.find(it=>Boolean(it.checked)===false)){
                                                    setAllChecked(true)
                                                }
                                                setDatasource({ data, total: data.length })
                                            }}>
                                            <img alt="example" height={200} width='100%' src={item.icon} className={`${styles.cardImg}`} />
                                            <div className={styles.checkdiv}><Checkbox checked={item.checked} className={styles.fr} /></div>
                                        </div>
                                    }
                                >
                                    <Meta title={<span style={{ fontSize: 12 }}>{item.name}</span>} description={props.noDescription?null:<Row >
                                        <Col span={12}>
                                            效果图 <span className={styles.redColor}>({item.effectsCount})</span>
                                        </Col>
                                        <Col span={12}>
                                            报价  <span className={styles.redColor}>({item.priceListCount})</span>
                                        </Col>
                                    </Row>} />
                                </Card>
                                </Col>
                            )
                        }) : <div style={{ textAlign: 'center', color: "#ccc" }}>暂无数据</div>
                    }
                  
                </Row>

            </div>
            <div className={styles.pagination}>
            {datasource.data.length > 0 && 
            <Pagination hideOnSinglePage={true} defaultCurrent={1} defaultPageSize={20} total={50} />}
            </div>
        </React.Fragment>
    )
})

export default cardCom