const fs = require("fs")

// let files = fs.readdirSync("./")

// let files = fs.readdir("./", (err, files) => {
//     if(err) {
//         throw err;
//     }
//
//     console.log(files)
// })
// console.log("Reading files...")

// console.log(files)

// let fileContents = fs.readFileSync("./readme.md", "UTF-8")

fs.readFile("./readme.md", "UTF-8", (err, contents) => {
    if(err){
        throw err
    }
    console.log(contents)
})

console.log("Reading the file...")

//console.log(fileContents)