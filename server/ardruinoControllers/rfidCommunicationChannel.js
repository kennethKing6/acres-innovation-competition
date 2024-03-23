const { SerialPort } = require('serialport');
const ArdruinoDataInterface = require('./ardruinoDataInterface');


// Create a port
const port = new SerialPort({
  path: "/dev/tty.Bluetooth-Incoming-Port",
  baudRate: 9600,
})
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

port.on("data", function(data) {
  const decryptedData = ArdruinoDataInterface.readFromTag(data)
    console.log("Data received: " + decryptedData);
    ArdruinoDataInterface.outputData = decryptedData;
});
