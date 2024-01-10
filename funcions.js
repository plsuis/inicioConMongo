const path = require("path");
const staticRoute2 = path.join(__dirname, "static\\imags\\");// sistema en windows

console.log('staticRoute2 ',staticRoute2,__dirname)

const RexistroUser = (req, res) => {
  let sampleFile;
  let uploadPath;
 
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("O ficheiro non foi actualizado.");
  }
  
  sampleFile = req.files.usuario;
  uploadPath = staticRoute2 + sampleFile.name;
  

  console.log("O ------ staticRoute2: ",staticRoute2);
  console.log("O path: ",staticRoute2, uploadPath);
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("Usuario rexistrado!");
  });
};

module.exports = {
  RexistroUser,
};
