const fs = require("fs")

let md = `
    This is a new File!!!
    =====================
    
    THIS IS A FILE THIS IS A FILE THIS IS A FILE
    HELLO WORLD HELLO WORLD HELLO WORLD!!!!!!!!!
`

fs.writeFile("writtenFile.txt", md.trim(), (err) => {
    if(err){
        throw err
    }

    fs.appendFileSync("writtenFile.txt", "\n\n\n\n YOYOYOYO I AM APPENDING")
    
    console.log("writtenFile.txt has been written!")

})
