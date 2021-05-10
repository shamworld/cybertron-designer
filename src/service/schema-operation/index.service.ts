/*
 * @file schema 操作服务范例，我们需要实现 SchemaOperator 规定的四个接口
 */
import { v4 as uuid } from 'uuid';
import SchemaOperator from '@/interface/SchemaOperator';
import SchemaOperationPayload from '@/interface/schema-operation-payload';
import StyleValueUnit from '@/enum/style-value-unit';
import DynamicObject from '@/interface/dynamic-object';

class SchemaService implements SchemaOperator {
  static widgetGenerationDict: DynamicObject = {
    'container-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '容器',
        desc: '容器',
        props: {
          style: [
            {
              name: 'min-height',
              value: 40,
              unit: StyleValueUnit.px
            },
            {
              name: 'box-sizing',
              value: 'border-box',
              unit: StyleValueUnit.none
            }
          ]
        },
        children: []
      };
    },
    'text-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '文本',
        desc: '文本',
        props: {
          data: '文本控件',
          style: [
            {
              name: 'width',
              value: 'auto',
              unit: StyleValueUnit.none
            },
            {
              name: 'height',
              value: 20,
              unit: StyleValueUnit.px
            },
            {
              name: 'fontWeight',
              value: 600,
              unit: StyleValueUnit.none
            },
            {
              name: 'lineHeight',
              value: 20,
              unit: StyleValueUnit.px
            },
            {
              name: 'color',
              value: '#000',
              unit: StyleValueUnit.none
            }
          ]
        }
      };
    },
    'image-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '图片',
        desc: '图片',
        props: {
          url: {
            type: String,
            value: ''
          },
          alt: {
            type: String,
            value: ''
          },
          style: [
            {
              name: 'width',
              value: 'auto',
              unit: StyleValueUnit.none
            },
            {
              name: 'min-height',
              value: 40,
              unit: StyleValueUnit.px
            }
          ]
        }
      };
    },
    'list-widget': (data: { type: any }) => {
      return {
        id: uuid(),
        type: data.type,
        name: '列表',
        desc: '列表',
        props: {
          data: {
            type: Array,
            value: []
          },
          style: [
            {
              name: 'min-height',
              value: 40,
              unit: StyleValueUnit.px
            }
          ]
        },
        children: []
      };
    }
  };

  insertWidget(data: { type: string }): any {
    return SchemaService.widgetGenerationDict[data.type](data);
  }

  deleteWidget(payload: SchemaOperationPayload): any {}

  moveWidget(payload: SchemaOperationPayload): any {}

  updateWidget(payload: SchemaOperationPayload): any {}
}

export default new SchemaService();
