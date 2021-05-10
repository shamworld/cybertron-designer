/*
 * @file 描述容器需要的表单属性
 */
import FormConfig from '@/interface/front-end/form-config';

const baseFormConfig: FormConfig[] = [
  {
    name: '定位',
    desc: '在页面中放在哪个位置',
    type: 'position-setting',
  },
  {
    name: '布局',
    desc: '该容器内的元素将如何排布',
    type: 'layout-setting',
  },
  {
    name: '视觉效果',
    desc: '背景色、阴影、动画、过渡等',
    type: 'visual-effect-setting',
  }
];

export default baseFormConfig;
