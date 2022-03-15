
import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [home, setHome] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age:age, 
      home:home, 
      position:position, 
      wage:wage
    }).then(() =>{
      setEmployeeList([
        ...employeeList,
        {
          name: name, 
          age:age, 
          home:home, 
          position:position, 
          wage:wage
          // id:val.id     // not defined yet
        },
      ]);
    });
    getEmployees();
    window.location.reload(false);
    getEmployees();
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) =>{
      setEmployeeList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:3001/update', {
      wage:newWage,
      id:id
    }).then((response)=> {
      setEmployeeList(employeeList.map((val)=>{
        return val.id === id ? {
          id:val.id,
          name: val.name, 
          home:val.home, 
          age: val.age, 
          position:val.position, 
          wage:newWage} : val;
      }))
    });
  };

  const deleteEmployee = (id) => {
    
    
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
      setEmployeeList(employeeList.filter((val) => {
        return val.id !==id;
      }))
    });
  }

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event)=> {
            setName(event.target.value);
        }} />
        <label>Age:</label>
        <input type="number" onChange={(event)=> {
            setAge(event.target.value);
        }} />
        <label>Home Town:</label>
        <input type="text" onChange={(event)=> {
            setHome(event.target.value);
        }} />
        <label>Position:</label>
        <input type="text" onChange={(event)=> {
            setPosition(event.target.value);
        }} />
        <label>Salary:</label>
        <input type="number" onChange={(event)=> {
            setWage(event.target.value);
        }} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
          <button onClick={getEmployees}>Show Employees</button>

          {employeeList.map((val, key) => {
            return <div className="employee">
                      <div>
                          <h3>Name: {val.name}</h3>
                          <h3>Age: {val.age}</h3>
                          <h3>Home Town: {val.home}</h3>
                          <h3>Position: {val.position}</h3>
                          <h3>Wage: {val.wage}</h3>
                      </div>
                  <div>
                    <input type="text" placeholder='New Salary...' onChange={(event)=> {
                      setNewWage(event.target.value);
                      }} />
                    <button onClick={() => {updateEmployeeWage(val.id)}}>Update</button>
                    <button onClick={() => {deleteEmployee(val.id)}}>Delete Employee</button>
                  </div>
               </div>
          })}
      </div>
    </div>
  );
}

export default App;
