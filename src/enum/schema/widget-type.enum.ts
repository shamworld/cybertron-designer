enum WidgetType {
  container = 'container',
  text = 'txt',
  link = 'link',
  image = 'image',
  input = 'input',
  radio = 'radio',
  checkbox = 'checkbox',
  form = 'form',
  list = 'list',
  table = 'table',
  tree = 'tree',
  // 自定义类型——第三方组件，或者用户自己重构出来的组件，带源代码或者不带源代码
  custom = 'custom'
}

export default WidgetType;
