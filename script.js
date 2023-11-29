$ ("document").ready(function() {
	$("p").text('Змінений текст');

	$("#task1").addClass("highlight");
	$(".highlight").css('color', 'red').hide().fadeIn('slow');
	$("#task1 p").last().text('Новий останній текст');

	$("li").addClass("list-item");
	$(".list-item").css('background-color', 'lightgray');

	$('#Knopka').on('click', function() {
        $('.list-item').remove();
    });
});
