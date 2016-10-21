var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

var employees = [
	{ id: 1, name: 'Yusuf', mobile: '0712345673'},
	{ id: 2, name: 'Hasith', mobile: '0774345233' },
	{ id: 3, name: 'Nuwan', mobile: '0778345233' },
	{ id: 4, name: 'Yeshan', mobile: '0774356233' },
];

app.get('/api/employees', (req, res) => {
	res.send(employees);
});

app.get('/api/employees/:id', (req, res) => {
	var index = getEmployeeIndex(req.params.id);
	(index != -1) ? res.send(employees[index]) : res.sendStatus(404);
	
});

app.post('/api/employees', (req, res) => {
	console.log(`Received JSON POST:`);
	console.log(req.body);

	var employee = req.body;
	employee.id = employees[employees.length - 1].id + 1;
	employees.push(employee);
	
	res.send({'id': employee.id});
});

app.put('/api/employees/:id', (req, res) => {
	var index = getEmployeeIndex(req.params.id)
	var updatedEmployee = req.body;
	var status;

	if (index != -1) {
		var employee = employees[index];
		employee.name = updatedEmployee.name;
		employee.mobile = updatedEmployee.mobile;
		status = 200;
	} else {
		status = 404;
	}

	res.sendStatus(status);
});

app.delete('/api/employees/:id', (req, res) => {
	var index = getEmployeeIndex(req.params.id)
	
	if (index != -1) {
		employees.splice(index,1);
	}

	res.sendStatus(200);
});


app.listen(7150, () => {
	console.log('Started server on http://localhost:7150');
});

function getEmployeeIndex(id) {
	return employees.findIndex((element) => {
		return element.id == id;
	});
}