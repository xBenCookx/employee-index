import inquirer from "inquirer";
import db from "./db.js";

type Action =
  | "View all departments"
  | "View all roles"
  | "View all employees"
  | "Add a department"
  | "Add a role"
  | "Add an employee"
  | "Update an employee role"
  | "Update an employee manager"
  | "View employees by manager"
  | "View employees by department"
  | "Delete a department"
  | "Delete a role"
  | "Delete an employee"
  | "View department budget"
  | "Exit";

async function startApp(): Promise<void> {
  try {
    const { action } = await inquirer.prompt<{ action: Action }>({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "View employees by department",
        "View employees by manager",
        "View department budget",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Update an employee manager",
        "Delete a department",
        "Delete a role",
        "Delete an employee",
        "Exit",
      ],
    });

    const actions: Record<Action, () => void> = {
      "View all departments": viewDepartments,
      "View all roles": viewRoles,
      "View all employees": viewEmployees,
      "Add a department": addDepartment,
      "Add a role": addRole,
      "Add an employee": addEmployee,
      "Update an employee role": updateEmployeeRole,
      "Update an employee manager": updateEmployeeManager,
      "View employees by manager": viewEmployeesByManager,
      "View employees by department": viewEmployeesByDepartment,
      "Delete a department": deleteDepartment,
      "Delete a role": deleteRole,
      "Delete an employee": deleteEmployee,
      "View department budget": viewDepartmentBudget,
      "Exit": () => db.end(),
    };

    actions[action]();
  } catch (error) {
    console.error("An error occurred:", error);
    startApp();
  }
}

function queryDatabase(query: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, res) => {
      if (err) {
        console.error("Database error:", err);
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
}

async function viewDepartments(): Promise<void> {
  console.table(await queryDatabase("SELECT * FROM department"));
  startApp();
}

async function viewRoles(): Promise<void> {
  console.table(
    await queryDatabase(
      `SELECT role.id, role.title, role.salary, department.name AS department 
       FROM role JOIN department ON role.department_id = department.id`
    )
  );
  startApp();
}

async function viewEmployees(): Promise<void> {
  console.table(
    await queryDatabase(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
       FROM employee
       JOIN role ON employee.role_id = role.id
       JOIN department ON role.department_id = department.id
       LEFT JOIN employee manager ON employee.manager_id = manager.id`
    )
  );
  startApp();
}

async function addDepartment(): Promise<void> {
  const { name } = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter the department name:",
  });
  await queryDatabase("INSERT INTO department (name) VALUES ($1)", [name]);
  console.log(`Department "${name}" added successfully!`);
  startApp();
}

// Additional functions follow the same pattern as above (addRole, addEmployee, updateEmployeeRole, etc.)

startApp();
