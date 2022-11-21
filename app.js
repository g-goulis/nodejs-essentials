//const myModule = require("./myModule")
// const {inc, dec, getCount} = require("./myModule")

// console.log(myModule.anything)
// console.log(myModule.inc())
// console.log(myModule.inc())
//
// inc()
// inc()
// inc()
//
// console.log(`the count is ${getCount()}`)

const events = require("events")

let emitter = new events.EventEmitter()

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
})

emitter.emit("customEvent", "Hello World", "Computer")
emitter.emit("customEvent", "Cool", "Gabe")

process.stdin.on("data", (data) => {
    const input = data.toString().trim()

    if(input === "exit"){
        emitter.emit("customEvent", "Bye", "Process")
        process.exit()
    }

    emitter.emit("customEvent", input, "Terminal")
})