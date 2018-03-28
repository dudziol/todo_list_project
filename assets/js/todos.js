// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})
//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
// Hit Enter and Add Todo
$("input").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		//create a new li, add to ul with todoText
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>"+todoText+"</li>");
		//clear input field
		$(this).val("");
	}
})