/** 左边的组件 */
export interface IComponentList {
    type: number;
    typeName: string;
    list: Array<ITemplateProps>
}

/** 具体每个组件的信息 */
export interface ITemplateProps {
    id: number;
    name: string;
    type: string;
    icon: string;
    /** 后续把全部属性接入、每个组件有那些属性一一映射 **/
}