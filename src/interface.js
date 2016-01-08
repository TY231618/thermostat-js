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

  $.ajax({
    url : "http://api.wunderground.com/api/f136e6059a1c3177/geolookup/conditions/q/UK/London.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      var temp_c = thermostat.converter(temp_f);
      $('#current-location').text(location + ' ' + temp_c);

    }
  });




});
