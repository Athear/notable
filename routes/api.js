const fs = require("fs");

module.exports = function (app) {
    app.get("/api/notes", function(req,res){
      fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        allNotes = JSON.parse(data)
        res.json(allNotes);
      });
    })


    app.post("/api/notes", function(req,res){

    })


    app.delete("/api/notes", function(req,res){

    })

  };