/*
Same as default flicker program but flicker speed is controlled by USB input.
*/

int n = 1;//light flicker speed multiplier
int n;//light flicker speed multiplier

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {
  if(Serial.available()){//checks if there is data to be read
    n = (int)Serial.read();
  }
  if(Serial.available()>0){//checks if there is data to be read
    n = Serial.read();
    Serial.println("debug");

  digitalWrite(LED_BUILTIN, LOW);//default speed is 1000ms between flickers
  delay(1000/n);
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000/n);
    Serial.println(n);
  }
}
