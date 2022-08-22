import React, { useState } from "react";
import AddUser from "./components/users/AddUsers";
import UserLists from "./components/users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((preUserList) => {
      return [
        ...preUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={userList} />
    </div>
  );
}

export default App;
