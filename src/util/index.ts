import StyleSchema from '@/interface/schema/style.schema';
import DynamicObject from '@/interface/dynamic-object';

export function convertSchemaToStyle(styleSchema: StyleSchema[]) {
  return styleSchema.reduce(
    (accumulator: DynamicObject, curVal) => {
      accumulator[curVal.name] = `${curVal.value}${curVal.unit}`;
      return accumulator;
    },
    {}
  );
}
