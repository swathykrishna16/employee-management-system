const api = "http://localhost:5000";

// Add Employee
async function addEmployee(){

    const employee = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    await fetch(`${api}/addEmployee`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(employee)
    });

    getEmployees();
}

// Fetch Employees
async function getEmployees(){

    const response = await fetch(`${api}/employees`);

    const data = await response.json();

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    data.forEach((emp)=>{

        table.innerHTML += `
        
        <tr>

        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>

        <td>

        <button onclick="deleteEmployee(${emp.id})">
        Delete
        </button>

        </td>

        </tr>
        `;
    });
}

// Delete Employee
async function deleteEmployee(id){

    await fetch(`${api}/deleteEmployee/${id}`,{
        method:"PUT"
    });

    getEmployees();
}

getEmployees();
// Update Employee
async function updateEmployee(){

    const id = prompt("Enter Employee ID");

    const updatedEmployee = {

        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    await fetch(`${api}/updateEmployee/${id}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(updatedEmployee)
    });

    getEmployees();
    // Fetch Employee By ID
async function fetchEmployeeById(){

    const id = document.getElementById("searchId").value;

    const response = await fetch(`${api}/employee/${id}`);

    const data = await response.json();

    let table = document.getElementById("employeeTable");

    table.innerHTML = "";

    data.forEach((emp)=>{

        table.innerHTML += `

        <tr>

        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>

        <td>
        <button onclick="deleteEmployee(${emp.id})">
        Delete
        </button>
        </td>

        </tr>
        `;
    });
}
}