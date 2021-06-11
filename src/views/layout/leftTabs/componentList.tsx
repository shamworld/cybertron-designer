import React, { FC } from 'react';
import { ITemplateProps } from '@/types/componentList';
import { useRecoilState } from 'recoil';
import { getComponentData } from '@/store/atorms/global';
import { v4 as uuidv4 } from 'uuid';

import styles from './index.less';
interface IProps {
  list: ITemplateProps[];
}

const ComponentList: FC<IProps> = (props) => {
  const [componentData, setComponentData] = useRecoilState(getComponentData);
  const addComponentData = (item: ITemplateProps) => {
    const styles = item.props;
    let newcomponentData = [...componentData];
    const newItem: ITemplateProps = {
      id: uuidv4(),
      name: item.name,
      type: item.type,
      props: {
        ...styles,
      },
    };
    newcomponentData.push(newItem);
    setComponentData(newcomponentData);
  };
  return (
    <div className={styles.componentList}>
      {props.list.map((item: ITemplateProps) => (
        <div
          key={item.id}
          className={styles.name}
          onClick={() => addComponentData(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
export default ComponentList;
