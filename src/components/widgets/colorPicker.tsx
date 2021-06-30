import React, {ChangeEvent, useState} from 'react';
import styles from './colorPicker.less';

export interface IProps {
    onChange: Function;
    color?: string;
}

const ColorPicker: React.FC<IProps> = (props) => {
  const defaultColor = [
    '#ffffff',
    '#f5222d',
    '#fa541c',
    '#fadb14',
    '#52c41a',
    '#1890ff',
    '#722ed1',
    '#8c8c8c',
    '#000000',
    '',
  ];
  const [inputcolor, setColor] = useState(props?.color  || defaultColor[0])
  const changeColor = (c: string) => {
    setColor(c)
    props.onChange(c)
  };
  const colorList = () => {
    return (
      <ul className={styles.colorBox}>
        {defaultColor.map((c,index) => {
          return (
            <li key={index} style={{background: c}} onClick={()=>changeColor(c)}></li>
          );
        })}
      </ul>
    );
  };
  return <div className={styles['components-colorpicker']}>
    <div className={styles['native-color-container']}>
      <span>背景颜色：</span>
        <input type="color" value={inputcolor} onChange={(e:ChangeEvent<HTMLInputElement>)=> changeColor(e.target.value)}/>

      </div>
      {colorList()}
      
      </div>;
};

export default ColorPicker;
