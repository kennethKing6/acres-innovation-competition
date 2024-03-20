const { SerialPort } = require('serialport');
const ArdruinoDataInterface = require('./ardruinoDataInterface');


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

function writeToArdruino(){
  return port.write(data,'binary', function(err) {
    if (err) {
     console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
}
writeToArdruino(ArdruinoDataInterface.writeToTag())

setInterval(()=>{
  const result = writeToArdruino(ArdruinoDataInterface.writeToTag())
  console.log("result",result)
},400)
  
