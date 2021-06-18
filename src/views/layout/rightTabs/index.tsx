import React, { Fragment } from 'react'
import { Tabs, Row } from 'antd';
import { useRecoilValue } from "recoil"
import { reduce } from 'lodash-es'
import { IComponentData } from "@/types/componentData"
import { mapPropsToForms, FormProps, PropToForm } from '@/types/propsMap'
import { getCurrentElement } from "@/store/selectors/componentsSelectors"
import { firstToUpper } from "@/util"
import styles from './index.less'
const TabPane = Tabs.TabPane

// TODO 
// 后期待配置 根据属性映射关系自动遍历绑定 不需要一个个去手👋码
const Index: React.FC = () => {
    const currentElement = useRecoilValue<IComponentData>(getCurrentElement)
    if (currentElement && currentElement.props) {
        const propMap = currentElement.props
        console.log(propMap);
        
        const propChange = (v) => {
            console.log(v);
        }
        const finalProps = reduce(propMap, (result, value, key) => {
            const item = mapPropsToForms[key] as PropToForm
            if (item) {
                const { valueProp = "value", eventName = "change", initalTransform, afterTransform } = item
                const newItem: FormProps = {
                    ...item,
                    valueProp, // 自定义值的名称
                    eventName, // 自定义事件名称
                    value: initalTransform ? initalTransform(value) : value,
                    events: {
                        // eventName:change/foce 等 需要拼接成 onChange
                        [`on${firstToUpper(eventName)}`]: (e: unknown) => {
                            console.log(e);
                            
                            propChange({
                                key, value: afterTransform ? afterTransform(e) : e
                            })
                        }
                    }
                }
                result[key] = newItem
            }
            return result
        }, {} as FormProps)

        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="组件属性" key="formProps">
                    {
                        finalProps && Object.keys(finalProps).map((key) => {
                            const values = finalProps[key]
                            const { component: Component, subComponent: SubComponent, options, valueProp, value, extraProps, eventName, events } = values
                            const domProps = {
                                [valueProp]: value,
                                ...extraProps,
                                ...events
                            }
                            return <Fragment key={key}>
                                {
                                    Component && <Row className={styles['prop-item']}>
                                        <label className={styles.label}>{values.text}</label>
                                        <Component {...domProps}>
                                            {options && options.length ? options.map((option) => {
                                                return <SubComponent value={option.value} key={option.value}>{option.text}</SubComponent>
                                            }) : null}
                                        </Component>
                                    </Row>
                                }
                            </Fragment>
                        })
                    }
                </TabPane>
                <TabPane tab="数据源" key="dataSource">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )
    }
    return null
}

export default Index