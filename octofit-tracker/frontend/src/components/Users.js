import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://friendly-meme-6rxpx79r76wh5wvg-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;