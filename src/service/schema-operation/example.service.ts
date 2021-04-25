/*
 * @file schema 操作服务范例，我们需要实现 SchemaOperator 规定的四个接口
 */
import SchemaOperator from '@/interface/SchemaOperator'
import SchemaOperationPayload from '@/interface/schema-operation-payload'

class ExampleService implements SchemaOperator {
  public delete(payload: SchemaOperationPayload): any {}

  public insert(payload: SchemaOperationPayload): any {}

  public move(payload: SchemaOperationPayload): any {}

  public update(payload: SchemaOperationPayload): any {}
}
