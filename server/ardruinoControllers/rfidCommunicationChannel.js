const { SerialPort } = require('serialport')


// Create a port
const port = new SerialPort({
  path: "/dev/tty.BLTH",
  baudRate: 9600,
})
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

port.on("open", function() {
    console.log("-- Connection opened --");
});

port.on("data", function(data) {
    console.log("Data received: " + data);
});
