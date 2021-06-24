import { ReactNode } from 'react'
import { Input, InputNumber, Slider, Select, Radio } from "antd"
import { SketchPicker } from 'react-color'

import { TextComponentProps } from './defaultProps'
import fontFamilyOptions from '../components/widgets/fontFamilyOptions'

const TextArea = Input.TextArea
const Group = Radio.Group
const Option = Select.Option

// TODO
// SketchPicker 待二次封装、点击弹出来颜色选择器、不然太占位置
export interface PropToForm {
    component: any;
    subComponent?: any;
    value?: string;
    valueProp?: string;
    text?: string;
    extraProps?: { [key: string]: any };
    options?: { text: string | ReactNode; value: any }[];
    initalTransform?: (v: any) => any;
    afterTransform?: (v: any) => any;
    eventName?: string;
}

export interface FormProps {
    component: string;
    subComponent?: string;
    value: string;
    extraProps?: { [key: string]: any };
    text?: string;
    options?: { text: string | ReactNode; value: any }[];
    valueProp?: string;
    eventName?: string;
    events?: { [key: string]: (e: any) => void };
}

export type PropsToForms = {
    [P in keyof TextComponentProps]?: PropToForm
}

const pxToNumberHandler: PropToForm = {
    component: InputNumber,
    initalTransform: (v: string) => parseInt(v),
    afterTransform: (e: number) => e ? `${e}px` : '',
}

export const mapPropsToForms: PropsToForms = {
    text: {
        text: '文本',
        component: TextArea,
        value: "test",
        extraProps: { rows: 3 },
        afterTransform: (e: any) => e.target.value,
    },
    fontSize: {
        text: '字号',
        ...pxToNumberHandler
    },
    width: {
        text: '宽度',
        ...pxToNumberHandler
    },
    height: {
        text: '高度',
        ...pxToNumberHandler
    },
    paddingLeft: {
        ...pxToNumberHandler,
        text: '左边距'
    },
    paddingRight: {
        ...pxToNumberHandler,
        text: '右边距'
    },
    paddingTop: {
        ...pxToNumberHandler,
        text: '上边距'
    },
    paddingBottom: {
        ...pxToNumberHandler,
        text: '下边距'
    },
    lineHeight: {
        text: '行高',
        component: Slider,
        extraProps: { min: 0, max: 30, step: 1 },
        initalTransform: (v: string) => parseInt(v),
        afterTransform: (e: number) => e ? `${e}px` : '',
    },
    opacity: {
        text: '透明度',
        component: Slider,
        extraProps: {
            disabled: true,
        },
        initalTransform: (v: string) => parseFloat(v) * 100,
        afterTransform: (v: string) => parseFloat((Number(v) / 100).toString()),
    },
    textAlign: {
        component: Group,
        subComponent: Radio,
        text: '对齐',
        options: [
            { value: 'left', text: '左' },
            { value: 'center', text: '中' },
            { value: 'right', text: '右' }
        ],
        afterTransform: (e: any) => e.target.value,
    },
    fontFamily: {
        component: Select,
        subComponent: Option,
        text: '字体',
        options: [
            { value: '', text: '无' },
            ...fontFamilyOptions
        ]
    },
    // commonComponentProps - border type
    borderStyle: {
        component: Select,
        subComponent: Option,
        extraProps: {
            style: {
                width: "100px"
            }
        },
        text: '边框类型',
        options: [
            { value: 'none', text: '无' },
            { value: 'solid', text: '实线' },
            { value: 'dashed', text: '破折线' },
            { value: 'dotted', text: '点状线' }
        ]
    },
    borderColor: {
        text: '边框颜色',
        component: SketchPicker,
        valueProp: "color",
        afterTransform: (e: any) => e.hex
    },
    borderWidth: {
        ...pxToNumberHandler,
        text: '边框宽度',
        extraProps: { min: 0, max: 20 }
    },
    borderRadius: {
        ...pxToNumberHandler,
        text: '边框圆角',
        extraProps: { min: 0, max: 200 }
    },
    color: {
        component: SketchPicker,
        text: '字体颜色',
        valueProp: "color",
        afterTransform: (e: any) => e.hex
    },
    backgroundColor: {
        component: SketchPicker,
        text: '背景颜色',
        valueProp: "color",
        afterTransform: (e: any) => e.hex
    },
}