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

function writeToArdruino(data){
  return port.write(data,'binary', function(err) {
    if (err) {
     console.log('Error on write: ', err.message)
    }
    console.log('message written')
  })
}
const dataToWrite = "987654321"//NOTE: will not write the second character to the RFID tag
writeToArdruino(dataToWrite)

setInterval(()=>{
  const result = writeToArdruino(dataToWrite)
  console.log("result",result)
},1000)
  
