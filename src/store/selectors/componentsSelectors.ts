import { selector } from 'recoil'
import { getComponentList } from "@/api/componentList"

export const getAllComponentList = selector({
    key: 'getComponentList',
    get: async () => {
        return await getComponentList()
    }
})