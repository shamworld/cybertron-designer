import StyleSchema from '@/interface/schema/style.schema';
import DynamicObject from '@/interface/dynamic-object';

export function convertSchemaToStyle(styleSchema: StyleSchema[]) {
  const result = styleSchema.reduce(
    (accumulator: DynamicObject, curVal) => {
      accumulator[curVal.name] = `${curVal.value}${curVal.unit}`;
      return accumulator;
    },
    {}
  );
  result.display = 'block';
  return result;
}
