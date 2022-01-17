# ayivel_QA_Task
QA Task has been completed as per the requirements.
Following are the details of the tests:

**API Test:**
CRUD operations has been done on the given URLs. 

Delete operation's assertion is failing as our test case is expecting a response message as 'Deleted' but is getting 'Created' instead. 
We can create global variables which can save created booking ID and then use the same created booking ID variable in update and delete APIs. but since it wasn't a requirement here we did not do it this way. but is a suggestion to improve the code. 

**UI Tests:**
UI tests are done in a way where user can go to cross origin websites as well but I have commented the code as it is taking almost 5 mins to complete the task. 

**Reports:**
Mochaawesome combined report is called and commands are saved in package.json. 
You just need to hit: '"npm run test:cli"' and 'npm run create:html:report' to see the combined report of all the test cases both in Json and HTML. 
