"use strict";

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('up increases', function(){
    thermostat.up();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

});
