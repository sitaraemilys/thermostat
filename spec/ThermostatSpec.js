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

  it('down decreases', function(){
    thermostat.down();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 100; i >= 0; i--) {
      thermostat.down();
    };
     expect(thermostat.temperature).toBeGreaterThan(10);
  });

});
