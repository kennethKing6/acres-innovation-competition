
module.exports = class ArdruinoDataInterface{

    static inputData = ""
    static outputData;


    static writeToTag(){
        return `00${this.inputData}`
    }
    static readFromTag(input){
        input =  `${input}`.replaceAll('0','');
        input =  `${input}`.replaceAll('F8:','');
        return `${input}`
    }
    
}