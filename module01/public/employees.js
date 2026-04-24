const employees = [{
  id: 1,
  name: 'John Doe',
  ext: 1111,
  email: 'john@example.com',
  title: 'Developer'
}, {
  id: 2,
  name: 'Jane Smith',
  ext: 2222,
  email: 'jane@example.com',
  title: 'Manager'
}, {
  id: 3,
  name: 'Bob Johnson',
  ext: 3333,
  email: 'bob@example.com',
  title: 'Designer'
}, {
  id: 4,
  name: 'Alice Adams',
  ext: 4444,
  email: 'alice@example.com',
  title: 'Director'
}];
const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Employee List"), /*#__PURE__*/React.createElement("table", {
  border: "1"
}, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, employees.map(employee => /*#__PURE__*/React.createElement("tr", {
  key: employee.id
}, /*#__PURE__*/React.createElement("td", null, employee.id), /*#__PURE__*/React.createElement("td", null, employee.name), /*#__PURE__*/React.createElement("td", null, employee.ext), /*#__PURE__*/React.createElement("td", null, employee.email), /*#__PURE__*/React.createElement("td", null, employee.title))))));
const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(element);