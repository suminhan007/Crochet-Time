import {CTWorksType} from "./type.ts";

export const CT_DESIGN_FILTER_SELECT_TYPE_DATA = [
    { value: "all", label: "全部" },
    // { value: CTWorksType?.Draft, label: "草稿" },
    { value: CTWorksType?.Design, label: "设计稿" },
    { value: CTWorksType?.Pattern, label: "图解" },
    { value: CTWorksType?.Product, label: "成品" },
    { value: CTWorksType?.Material, label: "材料包" },
    { value: CTWorksType?.Wool, label: "毛线" },
    { value: CTWorksType?.Course, label: "课程" },
    { value: CTWorksType?.Vlog, label: "Vlog" }
]

export const CT_DESIGN_FILTER_SELECT_TYPE_DATA_EN = [
    { value: "all", label: "All" },
    // { value: CTWorksType?.Draft, label: "Draft" },
    { value: CTWorksType?.Design, label: "Design" },
    { value: CTWorksType?.Pattern, label: "Pattern" },
    { value: CTWorksType?.Product, label: "Product" },
    { value: CTWorksType?.Material, label: "Package" },
    { value: CTWorksType?.Wool, label: "Wire" },
    { value: CTWorksType?.Course, label: "Course" },
    { value: CTWorksType?.Vlog, label: "Vlog" }
]

export const CT_DESIGN_WORKS_DATA = [
    { id: "1", name: "XXXxxx", type: CTWorksType?.Draft, date: "1天前" },
    { id: "2", name: "XXXxxx", type: CTWorksType?.Design, date: "刚刚" },
    { id: "3", name: "XXXxxx", type: CTWorksType?.Pattern, date: "1天前" },
    { id: "4", name: "XXXxxx", type: CTWorksType?.Product, date: "刚刚" },
    { id: "5", name: "XXXxxx", type: CTWorksType?.Material, date: "1天前" },
    { id: "6", name: "XXXxxx", type: CTWorksType?.Wool, date: "刚刚" },
    { id: "7", name: "XXXxxx", type: CTWorksType?.Course, date: "1天前" },
    { id: "8", name: "XXXxxx", type: CTWorksType?.Vlog, date: "刚刚" },
]
