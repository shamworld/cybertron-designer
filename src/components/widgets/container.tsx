import React from 'react'

// TODO 
// props 属性待整合
const ContainerWidget = (props) => {
    const { text, ...restProps } = props
    return (
        <div {...restProps} style={{ width: 100, height: 100 }}>
            {text}
        </div>
    )
}
export default ContainerWidget