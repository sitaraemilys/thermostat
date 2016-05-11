"use strict";

function Thermostat (){
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSavingModeMaxTemp = 25
  this.powerSavingMode = true
}

Thermostat.prototype.up = function(){
  if(this.temperature < this.powerSavingModeMaxTemp){
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

Thermostat.prototype.turnOffPowerSaving = function(){
  this.powerSavingMode = false;
};
