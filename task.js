$(document).ready(function() {
	//second page slideshow
	var width = $('[data-role="slider"]').attr('data-width'); 
	var height = $('[data-role="slider"]').attr('data-height'); 
	var count = $('[data-role="slider"] div.item').length; 
	$('[data-role="slider"]').css({
		position: 'relative', overflow: 'hidden', width: width, height: height}) 
		.find('.container').css({
		position: 'absolute', width: count * width, overflow: 'hidden'}) 
		.find('.item').css({
		width: width, height: height, float: 'left'});
		var currentPage = 0;
		var changePage = function () {
		$('[data-role="slider"] > .container').animate({left: -currentPage * width}
		, 500); };
		$('#left-button').click(function () {
		if (currentPage > 0) {currentPage--; changePage();}
		});
		$('#right-button').click(function () {
		if (currentPage < count - 1) {currentPage++; changePage();}
		});
	//nav
	$('#fst').on('click', function(){
		$('.first').css('display','block')
		$('.second').css('display','none')
		$('.third').css('display','none')
	})
	$('#snd').on('click', function(){
		$('.first').css('display','none')
		$('.second').css('display','block')
		$('.third').css('display','none')
	})
	$('#thd').on('click', function(){
		$('.first').css('display','none')
		$('.second').css('display','none')
		$('.third').css('display','block')
	})
});