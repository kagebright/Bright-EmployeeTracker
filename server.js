const inquirer = require('inquirer');

//importing mysql2
const mysql = require('mysql');

//connecting to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

function mainMenu() {
    inquirer 
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Quit'
        ]
    }
    ])
    .then(answers => {
        switch (answers.choice) {
            case 'View all departments':
              viewDepartments();
              break;
            case 'View all roles':
              viewRoles();
              break;
            case 'View all employees':
              viewEmployees();
              break;
            case 'Add a department':
              addDepartment();
              break;
            case 'Add a role':
              addRole();
              break;
            case 'Add an employee':
              addEmployee();
              break;
            case 'Update an employee role':
              updateEmployeeRole();
              break;
            case 'Quit':
              connection.end();
              break;
    }});
}

//starting the application by calling the main menu
mainMenu();

//view all departments
function viewDepartments() {
    const query = 'SELECT * FROM departments';
    connection.query(query, (error, results) => {
      if (error) throw error;
      console.table(results);
      mainMenu();
    });
  }
//view all roles
  function viewRoles() {
    const query = 'SELECT * FROM roles';
    connection.query(query, (error, results) => {
      if (error) throw error;
      console.table(results);
      mainMenu();
    });
  }
//view all employees
  function viewEmployees() {
    const query = 'SELECT * FROM employees';
    connection.query(query, (error, results) => {
      if (error) throw error;
      console.table(results);
      mainMenu();
    });
  }

//add a department
function addDepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the department:'
        }
      ])
      .then(answers => {
        const query = 'INSERT INTO departments SET ?';
        connection.query(query, { name: answers.name }, (error, results) => {
          if (error) throw error;
          console.log(`Department "${answers.name}" added successfully!`);
          mainMenu();
        });
      });
  }

  //add a role
  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of the role:'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary for the role:'
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'What is the department id for the role:'
        }
      ])
      .then(answers => {
        const query = 'INSERT INTO roles SET ?';
        connection.query(
          query,
          {
            title: answers.title,
            salary: answers.salary,
            department_id: answers.department_id
          },
          (error, results) => {
            if (error) throw error;
            console.log(`Role "${answers.title}" added successfully!`);
            mainMenu();
          }
        );
      });
  }
  
  //add an employee
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'first_name',
          message: 'What is the employee first name:'
        },
        {
          type: 'input',
          name: 'last_name',
          message: 'What is the employee last name:'
        },
        {
          type: 'input',
          name: 'role_id',
          message: 'WHat is the employee role id:'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the employee manager id (optional):'
        }
    ])
    .then(answers => {
        const query = 'INSERT INTO employees SET ?';
      connection.query(
        query,
        {
          first_name: answers.first_name,
          last_name: answers.last_name,
          role_id: answers.role_id,
          manager_id: answers.manager_id
        },
        (error, results) => {
          if (error) throw error;
          console.log(
            `Employee "${answers.first_name} ${answers.last_name}" added successfully!`
          );
          mainMenu();
        }
      );
    });
    }

    //updating employee role
    function updateEmployeeRole() {
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'id',
              message: 'Enter the id of the employee whose role you want to update:'
            },
            {
              type: 'input',
              name: 'role_id',
              message: 'Enter the new role id for the employee:'
            }
          ])
          .then(answers => {
            const query = 'UPDATE employees SET role_id = ? WHERE id = ?';
            connection.query('SElECT', [answers.role_id, answers.id], (error, results) => {
              if (error) throw error;
              console.log('Employee role updated successfully!');
              mainMenu();
            });
          });
      }
      

  