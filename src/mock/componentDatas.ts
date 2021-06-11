import { IComponentData } from '@/types/componentData'
import { v4 as uuidv4 } from 'uuid'
const mockComponentData: Array<IComponentData> = [
    {
        id: uuidv4(),
        name: "容器组件",
        type: "container-widget",
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
        type: "text-widget",
        props: {
            backgroundColor: 'red',
            text: "文本组件",
        }
    },
    {
        id: uuidv4(),
        name: "Button组件",
        type: "image-widget",
        props: {
            // width: "100px",
            // height: "20px",
        }
    }
]

export default mockComponentData