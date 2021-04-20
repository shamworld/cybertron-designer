// 控件服务需要实现的接口
import SchemaOperationPayload from '@/interface/schema-operation-payload';

export default interface SchemaOperator {
  //  TODO: 等装好 schema 的 npm 包之后把 any 替换掉。
  insert: (payload: SchemaOperationPayload) => any;
  // TODO: 同上
  update: (payload: SchemaOperationPayload) => any;
  // TODO: 同上
  delete: (payload: SchemaOperationPayload) => any;
  // TODO: 同上
  move: (payload: SchemaOperationPayload) => any;
}
