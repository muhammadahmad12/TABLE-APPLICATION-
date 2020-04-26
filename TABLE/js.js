function str() {
	$("#main").remove();
	$("body").append("<div id='ta'></div>");
	$("#ta").append(
		`<input id="va" type="number" placeholder="ENTER THE TABLE NUMBER"> <button onclick="tap()" > START </button>`
	);
}
function tap() {
	var vas = $("#va").val();
	$("#va,#ta>button").remove();
	$("#ta").append(`<ul id="io"></ul>`);
	for (i = 0; i <= 10; i++) {
		$("#io").append(`<li> ${vas} x ${i} = ${vas * i}  </li>`);
	}
}
