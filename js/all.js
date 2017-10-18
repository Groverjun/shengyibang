$(window).resize(function() {
	$("#left").height($(window).height())
});
$(".mat-button").on("click", function() {
	if($("#left").css("left") == "0px") {
		$("#left").css("left", "-250px")
	} else {
		$("#left").css("left", "0")
	}
})
$(".container").on("click",function(){
	$("#left").css("left", "-250px");
})
$(".left_list li").on("click", function() {
	$(this).css("background", "rgba(0,0,0,0.2)").siblings().css("background", "none")
	$(this).find("em").css("transform", "rotate(0deg)").parent().parent().siblings().find("em").css("transform", "rotate(-90deg)")

})
$("#right #buttton .btn").on("click", function() {
	$(this).find("i").addClass("abt_act1").parent().siblings().find("i").removeClass("abt_act1");
})
$("#information .btn-group button").on("click", function() {
	$(this).addClass("btn-active").parent().siblings().find("button").removeClass("btn-active")
})
$(".input-group input").on("focus", function() {
	$("#footer").css("display", "none")
})
$(".input-group input").on("blur", function() {
	$("#footer").css("display", "block")
})