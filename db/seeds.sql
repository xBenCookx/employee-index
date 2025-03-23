-- Insert departments into the department table
INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('HR'),
    ('Sales'),
    ('Marketing'),
    ('Finance'),          
    ('IT Support');       

-- Insert roles into the role table with corresponding department IDs
INSERT INTO role (title, salary, department_id)
VALUES  
    ('Software Engineer', 80000, 1),
    ('HR Manager', 60000, 2),
    ('Sales Lead', 70000, 3),
    ('Marketing Coordinator', 55000, 4),
    ('Finance Analyst', 75000, 5),         
    ('IT Support Specialist', 50000, 6),   
    ('Senior Software Engineer', 100000, 1),
    ('Sales Executive', 85000, 3);

-- Insert employees into the employee table with their respective roles and managers
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Liam', 'Anderson', 1, NULL),  -- No manager
    ('Olivia', 'Martinez', 2, NULL), -- No manager
    ('Noah', 'Thompson', 3, 1),  -- Reports to Liam Anderson
    ('Emma', 'Harris', 4, NULL), -- No manager
    ('Mason', 'Clark', 5, NULL), -- No manager
    ('Ava', 'Lewis', 6, NULL), -- No manager
    ('Ethan', 'Walker', 7, 1),  -- Reports to Liam Anderson
    ('Sophia', 'Hall', 8, 3),  -- Reports to Noah Thompson
    ('Lucas', 'Young', 1, NULL); -- No manager
