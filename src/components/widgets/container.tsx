import React from 'react'
import {TextComponentProps} from "@/types/defaultProps"

// props 属性待整合
const ContainerWidget= (props) => {        
    const { text, ...restProps } = props
    return (
        <div style={...restProps}>
            {text}
        </div>
    )
}
export default ContainerWidget