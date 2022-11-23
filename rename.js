const fs = require("fs")

//fs.renameSync("./writtenFile.txt", "./writtenFileNew.txt")

// fs.rename("./writtenFileNew.txt", "./your-files-here/writtenFile.txt", (err) => {
//     if(err){
//         throw err
//     }
//
//     console.log("Completed move")
// })

fs.unlinkSync("./your-files-here/writtenFile.txt")