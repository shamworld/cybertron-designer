import React from 'react'
import { ITemplateProps } from '@/types/componentList'
import { useRecoilState } from 'recoil'
import { getComponentData } from '@/store/atorms/global'
import { v4 as uuidv4 } from 'uuid'

import styles from './index.less'
interface IProps {
    list: Array<ITemplateProps>;
}

const ComponentList = (props: IProps) => {
    const [componentData, setComponentData] = useRecoilState(getComponentData);
    const addComponentData = (item: ITemplateProps) => {
        let newcomponentData = [...componentData]
        const newItem = { ...item }
        newItem.id = uuidv4()
        console.log(newItem.id );
    
        newcomponentData.push(item)
        setComponentData(newcomponentData)
    }
    return (
        <div className={styles.componentList}>
            {
                props.list.map((item: ITemplateProps) => (
                    <div key={item.id} className={styles.name} onClick={() => addComponentData(item)}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}
export default ComponentList