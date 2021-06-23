import React, { Fragment, MouseEvent } from 'react'
import { Tabs, Row, Tooltip, Empty } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined, LockOutlined,  UnlockOutlined } from '@ant-design/icons'
import { useRecoilValue, useRecoilState } from "recoil"
import { reduce } from 'lodash-es'
import { IComponentData } from "@/types/componentData"
import { mapPropsToForms, FormProps, PropToForm } from '@/types/propsMap'
import { TextComponentProps } from "@/types/defaultProps"
import { componentDataAtom, currentElementAtom } from '@/store/atorms/global'
import { getCurrentElement, } from "@/store/selectors/componentsSelectors"
import { firstToUpper } from "@/util"
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import styles from './index.less'
const TabPane = Tabs.TabPane

const Index: React.FC = () => {
    const currentElement = useRecoilValue<IComponentData>(getCurrentElement)
    const [componentData, setComponentData] = useRecoilState(componentDataAtom);
    // const currentElementId = useRecoilValue(currentElementAtom);
    const [currentElementId, setElementId] = useRecoilState(currentElementAtom);
    if (currentElement && currentElement.props) {
        const isLocked = currentElement.isLocked
        const isHidden = currentElement.isHidden
        const propMap = currentElement.props
        const propChange = ({ key, value }) => {
            let newData = [...componentData]
            // console.log(newData)
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
        // 显示隐藏
        const changeLayerHidden = (item:IComponentData)=> {
            let newData = [...componentData]
            newData = newData.map((data) => {
                if (data.id === item.id) {
                    const { isHidden, ...otherData }= data
                    data = {
                        isHidden: !isHidden,
                        ...otherData
                    }
                }
                return data
            })
            setComponentData(newData)
        }
        // 是否锁定使其不可编辑
        const changeLayerLock = (item:IComponentData)=> {
            let newData = [...componentData]
            newData = newData.map((data) => {
                if (data.id === item.id) {
                    // data.
                    const { isLocked, ...otherData }= data
                    data = {
                        isLocked: !isLocked,
                        ...otherData
                    }
                }
                return data
            })
            setComponentData(newData)
        }
        // 设置选中项
        const selectItem = (e:MouseEvent<HTMLDivElement>, item: IComponentData)=> {
            e.preventDefault()
            setElementId(item.id)
        }

        // const onBeforeCapture = () => {

        // }
        // const onBeforeDragStart = () => {

        // }
        // const onDragStart = () => {

        // }
        const onDragUpdate = (result: DropResult) => {
            
        }
        const onDragEnd = (result: DropResult) => {
            // console.log(result)
            const { source, destination, draggableId } = result;
            if(!destination) return
            let arr:IComponentData[] = [...componentData]
            // arr[0].
            const [remove] = arr.splice(source.index, 1);
            arr.splice(destination.index, 0, remove);
            setComponentData(arr)
        }
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="组件属性" key="formProps">
                    {/* {
                        console.log('isLocked', isLocked)
                    } */}
                    {
                        !isLocked ?
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
                        }) : <Empty description={ isHidden ? "已隐藏，暂无法编辑":"已锁定，暂无法编辑"} />
                    }
                </TabPane>
                <TabPane tab="图层设置" key="layer">
                    {/* Content of Tab Pane 2 */}
                    {
                        <DragDropContext 
                            onDragEnd={(result: DropResult)=>onDragEnd(result)}
                            onDragUpdate={(result: DropResult)=>onDragUpdate(result)}
                        >
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                               <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {
                                        componentData.map((item:IComponentData,index:number)=> {
                                            return (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                     {(p, s) => (
                                                <div className={styles['layer-cell']} ref={p.innerRef} 
                                                {...p.draggableProps}
                                                {...p.dragHandleProps}
                                                onClick={(events:MouseEvent<HTMLDivElement>)=>selectItem(events,item)}>
                                                    {/* // 是否可见 */}
                                                    <span onClick={()=>changeLayerHidden(item)} className={styles['hidden-text']}>
                                                        <Tooltip title={ item.isHidden ? '显示' : '隐藏'}>
                                                            {!item.isHidden ? <EyeOutlined/> :
                                                            <EyeInvisibleOutlined/> }
                                                        </Tooltip>
                                                    </span>
                                        
                                                    {/* 是否禁止编辑 */}
                                                    <span onClick={()=>changeLayerLock(item)} className={styles['hidden-text']}>
                                                        <Tooltip title={ item.isLocked ? '解锁' : '锁定'}>
                                                            {!item.isLocked ? <UnlockOutlined/> :
                                                            <LockOutlined/> }
                                                        </Tooltip>
                                                    </span>
                                                    <span>{item.layerName}</span> 
                                                </div>
                                                )}
                                                </Draggable>
                                                
                                            )
                                        })
                                    }
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
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