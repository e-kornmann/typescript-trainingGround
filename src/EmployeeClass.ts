import {
  PersonClass,
} from './PersonClass';

class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  EmployeeClass,
};
