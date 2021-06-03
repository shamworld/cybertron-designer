import React from 'react'

// TODO 
// props 属性待整合
const TextWidget = (props) => {
    const { text, ...restProps } = props
    return (
        <p {...restProps}>
            {text}
        </p>
    )
}
export default TextWidget