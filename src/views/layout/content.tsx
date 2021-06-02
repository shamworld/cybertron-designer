import React, { createElement, Fragment } from 'react'
import mockComponentData from '@/mock/IComponentDatas'
import { IComponentData } from '@/types/componentData'
import styles from './index.less'
// TODO
// 待实现外层 div 拖动、点击选中、右键操作、nodeType 为文本选中出现 tool-bar
const Index: React.FC = () => {
    return (
        <div className={styles.content}>
            {mockComponentData.map((item: IComponentData) => {
                return <div key={item.id}>
                    {/* 到时候需要根据数据循环递归去遍历 */}
                    {createElement(
                        item.type, {
                        style: { ...item.props }
                    },
                        item.name
                    )} </div>
            })}
        </div>
    )
}

export default Index