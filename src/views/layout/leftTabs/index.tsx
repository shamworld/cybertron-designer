import React from 'react'
import { Tabs } from 'antd';
import { useRecoilValue } from "recoil"
import { getAllComponentList } from "@/store/selectors/componentsSelectors"
import { IComponentList } from '@/types/componentList'
import ComponentList from './componentList'
import Tree from './treeList'
const TabPane = Tabs.TabPane

const Index: React.FC = () => {
    const componentList: Array<IComponentList> = useRecoilValue(getAllComponentList)
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="组件" key="components">
                <Tabs tabPosition="left">
                    {componentList.map((item: IComponentList) => {
                        return (
                            <TabPane tab={item.typeName} key={item.type}>
                                <ComponentList list={item.list} />
                            </TabPane>
                        )
                    })}
                </Tabs>
            </TabPane>
            <TabPane tab="组件组合🌲" key="tree">
                <Tree />
            </TabPane>
        </Tabs >
    )
}

export default Index