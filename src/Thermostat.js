"use strict";

function Thermostat (){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.maxTemp){
    this.temperature += 1;
  } else {
    this.temperature;
  }

};

Thermostat.prototype.down = function(){
  if (this.temperature > this.minTemp){
    this.temperature -= 1;
  } else {
    this.temperature;
  }
};

Thermostat.prototype.changePowerSavingMode = function(){
  this.maxTemp = 32;
};
