$(function() {
	//do jQuery stuff here
	// $(".me").click(function () {
 //        $.simpModal({
 //            closeButton: true,
 //            width: 415,
 //            ajax: {
 //                file: "pages/me.php"
 //            }
 //        });
 //    });

	$("a").each(function() {
		var link = $(this).attr("href");
		if($.type(link) === "string" && link.charAt(0) == "#" && link.length > 1) {
			var target = $(link);
			$(this).click(function(e) {
				e.preventDefault();
				go_to(target);
			});
		}
	});

});

function go_to(destination) {
    var body = $('body');
    body.data("scrolling", true);

    var final_dest = destination.offset().top;
    if (final_dest > 0) final_dest += 50;
    
    $('html, body').animate({
        scrollTop: final_dest
    }, 800, 'easeInOutExpo', function () {
        body.data("scrolling", false);
    });
}