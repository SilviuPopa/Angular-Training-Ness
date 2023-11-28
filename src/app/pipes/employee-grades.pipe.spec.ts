import { EmployeeGradesPipePipe } from './employee-grades-pipe.pipe';

describe('EmployeeGradesPipePipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeGradesPipePipe();
    expect(pipe).toBeTruthy();
  });
});
