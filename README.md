# Employee Tracker  

## Table of Contents  

- [Description](#description)  

- [Installation](#installation)

- [Usage](#usage)  

- [Contributing](#contributing)

## Description  

Employee Tracker is a command-line application designed to help businesses efficiently manage employee records. Built using Node.js, Inquirer, and PostgreSQL, this Content Management System (CMS) allows users to view, add, update, and delete departments, roles, and employees with ease. I also used the Xpert learning assistant application to help clean and review my code.

## Installation  

Follow these steps to set up the application:  

1. **Clone the repository:**  

   ```bash

   git clone https://github.com/xBenCookx/employee-index

   ```  

2. **Navigate to the project directory:**  

   ```bash

   cd employee-index

   ```  

3. **Install dependencies:**  

   ```bash

   npm install

   ```  

4. **Install the required Inquirer version:**  

   ```bash

   npm i inquirer@8.2.4

   ```  

5. **Set up the PostgreSQL database:**  
   - Create a PostgreSQL database.  
   - Use the `schema.sql` file to create necessary tables (department, role, employee).  
   - Optionally, use `seeds.sql` to populate the database with sample data.  

6. **Create a `.env` file in the root directory and configure your database credentials:**  

   ```plaintext
   DB_USER=yourDatabaseUsername
   DB_PASSWORD=yourDatabasePassword
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=yourDatabaseName
   ```  

## Usage  

1. Start the application by running:  

   ```bash

   npm start

   ```  

2. You will be presented with a menu to manage your employee database. Options include:  
   - View all departments, roles, and employees  
   - View employees by manager or department  
   - View total department budget  
   - Add a department, role, or employee  
   - Update an employee’s role or manager  
   - Delete a department, role, or employee  

3. Use the arrow keys to navigate and follow the prompts to manage data efficiently.  

## Contributing  

Contributions are welcome! To contribute:  

1. Fork the repository.  
2. Create a new branch for your changes.  
3. Make modifications and commit them.  
4. Open a pull request.  
