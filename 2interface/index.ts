// 只会检查传参是否包含对应类型属性
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)

// 通过接口声明参数类型
interface LabelledValue {
  label: string
}

function printLabel2(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}
printLabel2(myObj)
