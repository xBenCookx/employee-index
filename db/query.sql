-- Retrieve employee details along with their manager's information, role, salary, and department
SELECT 
    e.id AS employee_id,
    e.first_name AS employee_first_name,
    e.last_name AS employee_last_name,
    CONCAT(m.first_name, ' ', m.last_name) AS manager_name,
    r.title AS job_title,
    r.salary AS salary,
    d.name AS department
FROM 
    employee e
-- Join to include manager details
LEFT JOIN 
    employee m ON e.manager_id = m.id
-- Join to include role details
INNER JOIN 
    role r ON e.role_id = r.id
-- Join to include department details
INNER JOIN 
    department d ON r.department_id = d.id
ORDER BY 
    e.id; -- Sorting results by employee ID
