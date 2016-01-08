$(document).ready(function() {
  var weather_api_start = "http://api.wunderground.com/api/f136e6059a1c3177/conditions/q/";

  $(function() {
    function select_city( message ) {
      var city = message.split(", ");
      var city_name = city[0];
      var city_area = city[1];

      $.get(weather_api_start + city_area + '/' + city_name + ".json",
      function(data) {
        $('#city-location').text(data.current_observation.temp_c);
      });
    }

    $( "#city" ).autocomplete({
      source: function( request, response ) {
        $.ajax({
          url: "http://gd.geobytes.com/AutoCompleteCity",
          dataType: "jsonp",
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
        select_city( ui.item ? ui.item.label : "Nothing selected");
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
  });

});
