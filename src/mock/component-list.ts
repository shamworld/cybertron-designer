import { v4 as uuidv4 } from 'uuid'
import { IComponentList } from '@/types/componentList'

const mockComponentList: Array<IComponentList> = [
  {
    type: 1,
    typeName: '通用',
    list: [
      {
        id: uuidv4(),
        name: '容器',
        type: 'ContainerWidget', // ContainerWidget ro container-widget
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '文本',
        type: 'text-widget',
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '图片',
        type: 'image-widget',
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '列表',
        type: 'list-widget',
        icon: 'BuildOutlined'
      }
    ]
  },
  {
    type: 2,
    typeName: '自定义',
    list: [
      {
        id: uuidv4(),
        name: '列表',
        type: 'list',
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '列表',
        type: 'list',
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '列表',
        type: 'list',
        icon: 'BuildOutlined'
      },
      {
        id: uuidv4(),
        name: '列表',
        type: 'list',
        icon: 'BuildOutlined'
      }
    ]
  },
  {
    type: 3,
    typeName: '第三方',
    list: []
  }
];

export default mockComponentList;
