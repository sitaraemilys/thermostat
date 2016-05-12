describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it('has a default temperature as 20', function(){
    expect(thermostat.getCurrentTemp()).toEqual(DEFAULT_TEMP);
  });
  it('has up button to increase temp', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });
  it('has down button to decrease the temp', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });
  it('min is 10 degrees', function(){
    for(var i= 0; i<11; i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });
  it('power saving on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can have power mode switched off', function(){
    thermostat.switchPowerSavingModeOff();
    exoect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  describe('when power saving mode is on', function(){
    it('has maximum temp of 25', function(){
      for (var i=0; i <6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });
  describe('when power saving mode is off', function() {
  it('has a maximum temperature of 32 degrees', function() {
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemp()).toEqual(32);
  });
});
it('can be reset to the default temperature', function() {
  for (var i = 0; i < 6; i++) {
    thermostat.up();
  }
  thermostat.resetTemp();
  expect(thermostat.getCurrentTemp()).toEqual(20);
});

describe('displaying usage levels', function() {
  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
 });
});
