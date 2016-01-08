$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#power-saving-status').text('On')

  $('#temperature-up').click(function() {
    thermostat.upButton();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.downButton();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetButton();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    $('#power-saving-status').text('On')
    thermostat.powerSavingSwitch();
    thermostat.powerSavingStatus();
  })

  $('#powersaving-off').click(function() {
    $('#power-saving-status').text('Off')
    thermostat.powerSavingSwitch();
    thermostat.powerSavingStatus();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemp());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
