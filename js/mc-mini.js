(function ($) {
    'use strict';
    $(function () {
        $(".mini .has-events").children().not(".trigger, .mc-date, .event-date").hide();
        $(document).on("click", ".mini .has-events .trigger", function (e) {
            e.preventDefault();
			var current_date = $(this).parent().children();
            current_date.not(".trigger").toggle().attr("tabindex", "-1").focus();
			$(".mini .has-events").children().not(".trigger, .mc-date, .event-date").not( current_date ).hide();			
        });
        $(document).on("click", ".mini-event .close", function (e) {
            e.preventDefault();
            $(this).closest("div.calendar-events").toggle();
        });
    });
}(jQuery));	
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */