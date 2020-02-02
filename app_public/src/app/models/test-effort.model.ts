export interface  TestEffort {
    id: string;
    name: string;
    author: string;
    create_date: Date;
    status: string;
    total: number;
    passed: number;
    failed: number;
    blocked: number;
  }
  
  export const TEST_EFFORT_DATA: TestEffort[] = [
    {
      id: '1', name: 'SelfTest regression - build 2020.01.26',
      author: 'Mario Bros', create_date: new Date('2020-01-26'),
      status: 'Active', total: 100, passed: 50, failed: 45, blocked: 5
    },
    {
      id: '2', name: 'SelfTest regression - build 2020.01.25',
      author: 'Mario Bros', create_date: new Date('2020-01-25'),
      status: 'Active', total: 100, passed: 51, failed: 44, blocked: 5
    },
    {
      id: '3', name: 'SelfTest regression - build 2020.01.24',
      author: 'Mario Bros', create_date: new Date('2020-01-24'),
      status: 'Active', total: 100, passed: 52, failed: 43, blocked: 5
    },
  ];