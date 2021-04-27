const http = require('http');
const port = 7000;
const fs = require('fs');

function requestHandler(request, response){
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'});

    let filePath;
    switch(request.url){
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        case '/project':
            filePath = './../../../index.html';
            break;
        case '/project/miniTasks/keycode.html':
            filePath = './../../../miniTasks/keycode.html';
            break;
        default : filePath = './error.html';
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log("error");
            return response.end("ERROR");
        }
        return response.end(data);
    })

    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log("error",err);
    //         return response.end("<h1>Error</h1>");
    //     }
    //     return response.end(data);
    // });

    // response.end("<h1>Heloo</h1>");
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running on port :",port);
});