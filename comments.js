// create web server
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Error occurred:', err);
    }
    console.log(`Server is listening on port ${port}`);
}); 
// To run the server, use the command: node <filename>.js

function skillsMember()
{
    var skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Git",
        "RESTful APIs",
        "TypeScript"
    ];

    return skills;
}           
module.exports = skillsMember;
