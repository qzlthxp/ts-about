// 可选参数
function getFullName(firstName: string, lastName: string) {
  return firstName + lastName
}

// 两个参数必传
getFullName()
getFullName('a')

function getFullName2(firstName: string, lastName?: string) {
  return firstName + lastName
}
// 第二个参数为可选参数，可选参数必须定义在必选参数后面
getFullName2('a')

function getFullName3(firstName: string, lastName: string = 'lastname') {
  return firstName + lastName
}
function getFullName4(firstName: string = 'firstname', lastName: string) {
  return firstName + lastName
}
// 指定默认值
getFullName3('a')
// 在必选参数前设置默认值参数，必须传入 undefined 才能获取默认值
getFullName4(undefined, '123')
