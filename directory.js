const fs = require("fs")

if(fs.existsSync("your-files-here")) {
    console.log("Already exists!")
} else  {
    fs.mkdir("your-files-here", err => {
        if(err){
            console.error(err)
        } else {
            console.log("Dir created")
        }

    })
}

