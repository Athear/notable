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
      const newNote = req.body;
      const uniqueID = Date.now(); //TODO: Should see if there's a better method to guarentee uniqueness;
      newNote.id = uniqueID;
      //TODO: consider trimming the text in newNote
      fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        allNotes = JSON.parse(data)

        allNotes.push(newNote);

        fs.writeFile(`${__dirname}/../db/db.json`,JSON.stringify(allNotes),'utf8',(err)=>{
          if (err) throw err;
          console.log("new note saved"); //DEBUG??
        })

        res.json(allNotes);
      });
    })


    app.delete("/api/notes", function(req,res){
      console.log(req);
    })

  };