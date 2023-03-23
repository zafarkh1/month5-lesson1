import React, { useState } from "react";

import "./toDo.scss";

function ToDo() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    return setModal(!modal);
  };

  const [toDo, setToDos] = useState(() => {
    const storedToDos = localStorage.getItem("todos");
    return storedToDos ? JSON.parse(storedToDos) : [];
  });

  const [newFname, setNewFname] = useState("");
  const [newLname, setNewLname] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newSalary, setNewSalary] = useState("");

  const handleChangeEvent = (e) => {
    setNewFname(e.target.value);
  };

  const handleChangeEvent1 = (e) => {
    setNewLname(e.target.value);
  };

  const handleChangeEvent2 = (e) => {
    setNewUserName(e.target.value);
  };

  const handleChangeEvent3 = (e) => {
    setNewAge(e.target.value);
  };

  const handleChangeEvent4 = (e) => {
    setNewSalary(e.target.value);
  };

  const handleChangeSubmit = (e) => {
    e.preventDefault();

    if (
      !newFname.trim() ||
      !newLname.trim() ||
      !newUserName.trim() ||
      !newAge ||
      !newSalary
    )
      return;
    setToDos([
      ...toDo,
      {
        id: Math.floor(Math.random() * 100),
        fName: newFname,
        lName: newLname,
        userName: newUserName,
        age: newAge,
        salary: newSalary,
      },
    ]);
    setNewFname("");
    setNewLname("");
    setNewUserName("");
    setNewAge("");
    setNewSalary("");
  };

  localStorage.setItem("todos", JSON.stringify(toDo));

  const handleDelete = (id) => {
    const updateTodo = toDo.filter((item) => item.id !== id);
    setToDos(updateTodo);
  };

  return (
    <>
      <div className="container">
        <h1>User Details</h1>
        {modal && (
          <div className="modal">
            <form onSubmit={handleChangeSubmit} id="form">
              <h3>Add User</h3>
              <input
                type="text"
                value={newFname}
                onChange={handleChangeEvent}
                placeholder="First name"
              />
              <input
                type="text"
                value={newLname}
                onChange={handleChangeEvent1}
                placeholder="Last name"
              />
              <input
                type="text"
                value={newUserName}
                onChange={handleChangeEvent2}
                placeholder="Username"
              />
              <input
                type="text"
                value={newAge}
                onChange={handleChangeEvent3}
                placeholder="Age"
              />
              <input
                type="text"
                value={newSalary}
                onChange={handleChangeEvent4}
                placeholder="Salary"
              />
              <button id="btn">Add</button>
              <button id="close" onClick={toggleModal}>
                &times;
              </button>
            </form>
          </div>
        )}
        <button id="btn" onClick={toggleModal}>
          Add
        </button>
        <table id="newTodo">
          <tr id="item">
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>UserName</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Delete</th>
          </tr>
          {toDo.map((element) => (
            <tr key={element.id} id="item">
              <td>{element.id}</td>
              <td>{element.fName}</td>
              <td>{element.lName}</td>
              <td>{element.userName}</td>
              <td>{element.age}</td>
              <td>{element.salary}</td>
              <button onClick={() => handleDelete(element.id)}>Delete</button>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default ToDo;