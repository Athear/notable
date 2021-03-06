const fs = require("fs");
module.exports = function (app) {
    app.get("/notes", function(req,res){
      fs.readFile(`${__dirname}/../public/notes.html`, (err,data)=>{
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
    })


    app.get("/*", function(req,res){
      fs.readFile(`${__dirname}/../public/index.html`, (err,data)=>{
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
    })

  };