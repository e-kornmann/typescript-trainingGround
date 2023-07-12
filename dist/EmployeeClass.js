"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeClass = void 0;
const PersonClass_1 = require("./PersonClass");
class EmployeeClass extends PersonClass_1.PersonClass {
    constructor() {
        super(...arguments);
        this.employeeId = -1;
    }
}
exports.EmployeeClass = EmployeeClass;
//# sourceMappingURL=EmployeeClass.js.map