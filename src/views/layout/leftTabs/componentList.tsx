import React from 'react'
import { ITemplateProps } from '@/types/templateProps'
import styles from './index.less'
interface IProps {
    list: Array<ITemplateProps>;
}

const ComponentList = (props: IProps) => {
    return (
        <div className={styles.componentList}>
            {
                props.list.map((item: ITemplateProps) => (
                    <div key={item.id} className={styles.name}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}
export default ComponentList