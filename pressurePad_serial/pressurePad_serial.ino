int whichPort_01 = A0;
int whichPort_02 = A1;
int whichPort_03 = A2;
int whichPort_04 = A3;

void setup (){
  Serial.begin (9600);
  Serial.println("Canyon Sensor Grid is On");
  }

void loop (){
  int result_01 = analogRead(whichPort_01);
  int result_02 = analogRead(whichPort_02);
  int result_03 = analogRead(whichPort_03);
  int result_04 = analogRead(whichPort_04);
    
  Serial.print(result_01);
  Serial.print(",");
  Serial.print(result_02);
  Serial.print(",");
  Serial.print(result_03);
    //800 + Hard
    //500 - 700 s
  Serial.print(",");
  Serial.print(result_04);
      //800 + Hard
      //500 - 700 s

     
  Serial.println();
  delay (100);
}

//Example Data being sent
//  Analog port = 14, average result = 508
//  Analog port = 15, average result = 1022
//  Analog port = 16, average result = 672


//  Creadit for Code Reference
//  Nick Gammon - http://forum.arduino.cc/index.php?topic=302940.0

