const express = require("express");
const router = express.Router();

const db = require("../db");

// Add Employee
router.post("/addEmployee", (req, res) => {

    const {name, email, department, salary} = req.body;

    const sql = `
    INSERT INTO employees(name,email,department,salary)
    VALUES(?,?,?,?)
    `;

    db.query(sql,[name,email,department,salary],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json("Employee Added Successfully");
    });
});

// Get Employees
router.get("/employees", (req,res)=>{

    const sql = `
    SELECT * FROM employees
    WHERE status='ACTIVE'
    `;

    db.query(sql,(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

// Delete Employee
router.put("/deleteEmployee/:id",(req,res)=>{

    const sql = `
    UPDATE employees
    SET status='INACTIVE'
    WHERE id=?
    `;

    db.query(sql,[req.params.id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json("Employee Deleted");
    });
});

// Update Employee
router.put("/updateEmployee/:id",(req,res)=>{

    const {name,department,salary} = req.body;

    const sql = `
    UPDATE employees
    SET name=?, department=?, salary=?
    WHERE id=?
    `;

    db.query(sql,[name,department,salary,req.params.id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json("Employee Updated");
    });
});
module.exports = router;