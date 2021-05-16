import StyleSchema from '@/interface/schema/style.schema';
import DynamicObject from '@/interface/dynamic-object';
import containerFormConfig from '@/config/forms/container';
import imgFormConfig from '@/config/forms/img';
import listFormConfig from '@/config/forms/list';
import textFormConfig from '@/config/forms/text';
import FormConfig from '@/interface/front-end/form-config';

export function convertSchemaToStyle(styleSchema: StyleSchema[]) {
  return styleSchema.reduce(
    (accumulator: DynamicObject, curVal) => {
      accumulator[curVal.name] = `${curVal.value}${curVal.unit}`;
      return accumulator;
    },
    {}
  );
}

export function getFormConfig(widgetType: string): FormConfig[] {
  const dict: DynamicObject = {
    'container-widget': containerFormConfig,
    'image-widget': imgFormConfig,
    'list-widget': listFormConfig,
    'text-widget': textFormConfig,
  };
  return dict[widgetType];
}

/*
 * 连字符属性转为驼峰
 */
export function hyphensToCamel(name: string) {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/*
 * 驼峰转为连字符
 */
export function camelToHyphens(name: string) {
  return name.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`);
}
