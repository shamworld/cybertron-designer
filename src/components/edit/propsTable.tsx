import React, { Fragment } from 'react'
import { Row } from 'antd';
import { useRecoilValue, useRecoilState } from "recoil"
import { reduce } from 'lodash-es'
import { mapPropsToForms, FormProps, PropToForm } from '@/types/propsMap'
import { TextComponentProps } from "@/types/defaultProps"
import { componentDataAtom, currentElementAtom } from '@/store/atorms/global'
import { firstToUpper } from "@/util"
import {IProps} from './EditGroup'
import styles from './index.less'

const Index: React.FC<IProps> = (props) => {
    const [componentData, setComponentData] = useRecoilState(componentDataAtom);
    const currentElementId = useRecoilValue(currentElementAtom);

    if (props.props) {
        const propMap = props.props
        const propChange = ({ key, value }) => {
            let newData = [...componentData]
            // TODO 后续抽离出去、可能还需要递归去找、现在先默认就是一层
            newData = newData.map((data) => {
                if (data.id === currentElementId) {
                    const newData = {
                        ...data,
                        props: {
                            ...data.props,
                            [key]: value
                        }
                    }
                    return newData
                }
                return data
            })
            setComponentData(newData)
        }
        const finalProps = reduce(propMap, (result, value, key) => {
            const newKey = key as keyof TextComponentProps
            const item = mapPropsToForms[newKey] as PropToForm
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
                            propChange({
                                key, value: afterTransform ? afterTransform(e) : e
                            })
                        }
                    }
                }
                result[newKey] = newItem
            }
            return result
        }, {} as FormProps)
    
        return (
            <Fragment>
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
            </Fragment>
        )
    }
    return null
}

export default Index