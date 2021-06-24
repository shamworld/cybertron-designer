import React, { Fragment } from 'react'
import { Tabs } from 'antd';
import { useRecoilValue } from "recoil"
import EditGroup from "@/components/edit/editGroup"
import LayerList from '@/components/layer/layerList'
import { IComponentData } from "@/types/componentData"
import { getCurrentElement, } from "@/store/selectors/componentsSelectors"
const TabPane = Tabs.TabPane

const Index: React.FC = () => {
    const currentElement = useRecoilValue<IComponentData>(getCurrentElement)
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="组件属性" key="formProps">
                <EditGroup props={currentElement?.props} />
            </TabPane>
            <TabPane tab="图层设置" key="layer">
                <LayerList props={currentElement} />
            </TabPane>
            <TabPane tab="数据源" key="dataSource">
                Content of Tab Pane 2
                </TabPane>
        </Tabs>
    )
}
export default Index