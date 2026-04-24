const employees = [
  { id: 1, name: 'John Doe', ext: 1111, email: 'john@example.com', title: 'Developer' },
  { id: 2, name: 'Jane Smith', ext: 2222, email: 'jane@example.com', title: 'Manager' },
  { id: 3, name: 'Bob Johnson', ext: 3333, email: 'bob@example.com', title: 'Designer' },
  { id: 4, name: 'Alice Adams', ext: 4444, email: 'alice@example.com', title: 'Director' }
];

const element = (
  <div>
    <h1>Employee List</h1>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Extension</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.ext}</td>
            <td>{employee.email}</td>
            <td>{employee.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(element);
