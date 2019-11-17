export interface Project {
    name: string;
    subtitle: string;
    status: string;
    author: string;
    create_date: string;
  }

export const PROJECT_DATA: Project[] = [
    {name: 'Project A', subtitle: 'Sanity tests', status: 'New', author: 'Mario Bros', create_date: '2019.11.12'},
    {name: 'Project B', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project C', subtitle: 'Customer acceptance tests', status: 'Blocked', author: 'Red Dragon', create_date: '2019.11.12'},
    {name: 'Project D', subtitle: 'Integration tests', status: 'Closed', author: 'Rocky Balboa', create_date: '2019.11.12'},
    {name: 'Project E', subtitle: 'Smoke tests', status: 'Active', author: 'Connan Barbarian', create_date: '2019.11.12'},
    {name: 'Project F', subtitle: 'Regression tests', status: 'Active', author: 'Mario Bros', create_date: '2019.11.12'},
    {name: 'Project G', subtitle: 'Regression tests', status: 'Active', author: 'Mario Bros', create_date: '2019.11.12'},
    {name: 'Project H', subtitle: 'Regression tests', status: 'Active', author: 'Connan Barbarian', create_date: '2019.11.12'},
    {name: 'Project I', subtitle: 'Regression tests', status: 'Panic', author: 'Connan Barbarian', create_date: '2019.11.12'},
    {name: 'Project J', subtitle: 'Regression tests', status: 'Active', author: 'Connan Barbarian', create_date: '2019.11.12'},
    {name: 'Project K', subtitle: 'Regression tests', status: 'Panic', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project L', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project M', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project N', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project O', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
    {name: 'Project P', subtitle: 'Regression tests', status: 'Active', author: 'Jon Snow', create_date: '2019.11.12'},
];
