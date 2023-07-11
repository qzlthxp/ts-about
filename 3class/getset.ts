// 存取器 在类中可以通过get 和 set对属性操作进行拦截
let passcode = 'secret passcode'

class Employee {
  private _fullName: string = ''

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  alert(employee.fullName)
}

export {}
