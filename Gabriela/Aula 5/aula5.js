var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2024&month=february';
var q = url.parse(adr, true);

console.log(q.host); //return 'localhost:8080'
console.log(q.pathname); //return '/default.html'
console.log(q.search); //return '?year=2024&month=february'
console.log(q.query); //return the month 'quebrado'

var qdata = q.query;
console.log(qdata.month); //return 'february'