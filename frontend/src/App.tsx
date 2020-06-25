import React, { useEffect, useState } from 'react';
import api from './services/api';
import User from "./components/User";
import Form from "./components/Form";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    api.get<IUser[]>('/users').then(res => setUsers(res.data));
  }, []);
  return (
    <div style={{
      width: '50vw',
      margin: '0 auto'
    }}>
      <h1>Hello!</h1>
      { users.map(user => <User key={user.email} user={user} />)}
      <Form />
    </div>
  );
}

export default App;
