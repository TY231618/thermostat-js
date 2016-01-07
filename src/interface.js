$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemp());

  $('#temperature-up').click(function() {
    thermostat.upButton();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#temperature-down').click(function() {
    thermostat.downButton();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#temperature-reset').click(function() {
    thermostat.resetButton();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#powersaving-on').click(function() {
    thermostat.powerSavingSwitch();
    thermostat.powerSavingStatus();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingSwitch();
    thermostat.powerSavingStatus();
  })
  // function updateTemperature() {
  //   $('#temperature').text(thermostat.temperature);
  // };
});
