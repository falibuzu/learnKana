var total_id=10;
var current_id=1;
function init(){
	//alert("init");
	show_hiragana();
}
function next(){
	if(current_id+1<total_id){
		current_id++;
	}else{
		current_id=1;	
	}
	show_hiragana();
}
function show_hiragana() {
	var img= $(".hiragana-img");
	img.attr("src","assets/image/hiragana/"+current_id+".png");
}