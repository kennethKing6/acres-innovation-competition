const { SerialPort } = require('serialport')


// Create a port
const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
})
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

port.on("open", function() {
    console.log("-- Connection opened --");
       
        
});

setInterval(()=>{
  port.write('toyui','binary', function(err) {
    if (err) {
     console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
  console.log("Looping")
},400)
  
