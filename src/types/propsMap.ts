import { ReactNode } from 'react'
import { TextComponentProps } from './defaultProps'
import fontFamilyOptions from './fontFamilyOptions'

export interface PropToForm {
    component: string;
    subComponent?: string;
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

export const mapPropsToForms: PropsToForms = {
    text: {
        text: '文本',
        component: 'a-textarea',
        value: "test",
        extraProps: { rows: 3 },
        afterTransform: (e: any) => e.target.value,
    },
    color: {
        component: 'color-picker',
        text: '字体颜色'
    },
    fontSize: {
        text: '字号',
        component: 'a-input-number',
        initalTransform: (v: string) => parseInt(v),
        afterTransform: (e: number) => e ? `${e}px` : '',
    },
    lineHeight: {
        text: '行高',
        component: 'a-slider',
        extraProps: { min: 0, max: 3, step: 0.1 },
        initalTransform: (v: string) => parseFloat(v),
        afterTransform: (e: number) => e.toString(),
    },
    opacity: {
        text: '透明度',
        component: 'a-slider',
        initalTransform: (v: string) => parseFloat(v) * 100,
        afterTransform: (v: string) => parseFloat((Number(v) / 100).toString()),
    },
    textAlign: {
        component: 'a-radio-group',
        subComponent: 'a-radio-button',
        text: '对齐',
        options: [
            { value: 'left', text: '左' },
            { value: 'center', text: '中' },
            { value: 'right', text: '右' }
        ],
        afterTransform: (e: any) => e.target.value,
    },
    fontFamily: {
        component: 'a-select',
        subComponent: 'a-select-option',
        text: '字体',
        options: [
            { value: '', text: '无' },
            ...fontFamilyOptions
        ]
    }
}