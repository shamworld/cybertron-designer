import { IComponentData } from '@/types/componentData'
import { v4 as uuidv4 } from 'uuid'
const mockComponentData: Array<IComponentData> = [
    {
        id: uuidv4(),
        name: "div",
        type: "div",
        props: {
            fontSize: "20px",
            color: 'red',
            width: "100px",
            height: "100px",
            backgroundColor: "green"
        }
    },
    {
        id: uuidv4(),
        name: "文本组件",
        type: "TextWidget",
        props: {
            color: 'green',
            text: "文本组件",
        }
    },
    {
        id: uuidv4(),
        name: "Button组件",
        type: "button",
        props: {
            // width: "100px",
            // height: "20px",
        }
    }
]

export default mockComponentData