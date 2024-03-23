
module.exports = class ArdruinoDataInterface{

    static inputData = "Hey you!"
    static outputData;


    static writeToTag(){
        return `00$${this.inputData}`
    }
    static readFromTag(input){
        input =  `${input}`.replaceAll('0','');
        return input
    }
    
}