MIN_TEMP = 10;

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#PSM-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-mode').text('on');
    updateTemperature();
  });

  $('#PSM-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-mode').text('off');
    updateTemperature();
  });

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

function displayWeather(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data){
  $('#city-temperature').text(data.main.temp);
});
}

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});

$(".dial").knob({
'min':
'max':32,
});




});
