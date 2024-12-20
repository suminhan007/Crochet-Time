import { WorksType } from "./Design/type"

export const DESIGN_HOME_FILTER_SELECT_TYPE_DATA = [
  { value: "all", label: "全部" },
  { value: WorksType?.Draft, label: "草稿" },
  { value: WorksType?.Design, label: "设计稿" },
  { value: WorksType?.Pattern, label: "图解" },
  { value: WorksType?.Product, label: "成品" },
  { value: WorksType?.Material, label: "材料包" },
  { value: WorksType?.Wool, label: "毛线" },
  { value: WorksType?.Course, label: "课程" },
  { value: WorksType?.Vlog, label: "Vlog" }
]

export const DESIGN_HOME_WORKS_DATA = [
  { id: "1", name: "XXXxxx", type: WorksType?.Draft, date: "1天前" },
  { id: "2", name: "XXXxxx", type: WorksType?.Design, date: "刚刚" },
  { id: "3", name: "XXXxxx", type: WorksType?.Pattern, date: "1天前" },
  { id: "4", name: "XXXxxx", type: WorksType?.Product, date: "刚刚" },
  { id: "5", name: "XXXxxx", type: WorksType?.Material, date: "1天前" },
  { id: "6", name: "XXXxxx", type: WorksType?.Wool, date: "刚刚" },
  { id: "7", name: "XXXxxx", type: WorksType?.Course, date: "1天前" },
  { id: "8", name: "XXXxxx", type: WorksType?.Vlog, date: "刚刚" },
]

export const STORE_NAV_DATA = [
  {
    key: "sketch",
    title: "稿子",
    dropData: [
      { key: "draft", title: "草稿" },
      { key: "design", title: "设计稿" },
      { key: "pattern", title: "图解" },
    ],
    open: true,
  },
  {
    key: "goods",
    title: "产品",
    dropData: [
      { key: "product", title: "成品" },
      { key: "material", title: "材料包" },
      { key: "wool", title: "毛线" },
      { key: "course", title: "课程" },
    ],
    open: true,
  },
  {
    key: "media",
    title: "媒体资源",
    dropData: [
      { key: "img", title: "图片" },
      { key: "video", title: "视频" },
      { key: "vlog", title: "Vlog" },
    ],
    open: true,
  },
]