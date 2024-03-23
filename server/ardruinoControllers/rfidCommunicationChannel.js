const { SerialPort } = require('serialport');
const { RFIDJobSiteTracker } = require('../accountability/rfidJobSiteTracker');
const ArdruinoDataInterface = require('./ardruinoDataInterface');


// Create a port
const port = new SerialPort({
  path: "COM4",
  baudRate: 9600,
})
// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
  })

port.on("data", function(data) {
  console.log("raw Data received: " + data);
  const decryptedData = ArdruinoDataInterface.readFromTag(data)
  console.log("decryptedData Data received: " + decryptedData);
    ArdruinoDataInterface.outputData = decryptedData;
    RFIDJobSiteTracker.inputToActions(decryptedData)
});
