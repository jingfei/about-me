$(function(){
	$("#works .da-thumbs").arrangeWorksGrid([
		{ img: "./img/works/01.jpg", title: "Sudoku Online Judge System", link: "http://judge.imslab.org/", content: "Check the correctness of the program online, and offer the battle mode for competition." },
		{ img: "./img/works/02.jpg", title: "NCKU CSIE Class Borrowing System", link: "http://www.csie.ncku.edu.tw/Class2014/", content: "The interface for students' ID card, class and equipment borrowing for NCKU CSIE." },
		{ img: "./img/works/03.jpg", title: "Microsoft Student Partners admission website", link: "http://jingfei.github.io/msp9th/", content: "The admission website for 9th Microsoft Student Partners, and it is cooperated with the group of design." },
		{ img: "./img/works/04.jpg", title: "Website for Taiwan's College Admission reviewed meeting",  link: "http://jingfei.github.io/104-admission/", content: "A simple website for Taiwan's College Admission reviewed meeting, the structure is using semantic-ui." },
		{ img: "./img/works/05.jpg", title: "Girls in Tech Taiwan x Facebook Hack for a Cause: Opinionoted", link: "https://github.com/maxis1718/fb6likes", content: "Analysing the distance from you and your friends for specific topic.<br/>Cooperated with Yahoo engineer." },
		{ img: "./img/works/06.jpg", title: "Iisigroup (資拓宏宇) Hackathon: FirstTry", link: "https://github.com/jingfei/FirstTry", content: "An application for Android, it is to help people realise their traveling dream." },
		{ img: "./img/works/07.png", title: "Mei-Chu Hackathon: Food Sharing Platform", link: "https://github.com/jingfei/FoodShare", content: "The web shared platform for people to share food with others.<br/>Take the prize of UI/UX." }
	]);
});

;(function($, undefined) {
	$.fn.arrangeWorksGrid = function(data, options) {
		for (var i = 0, len = data.length; i < len; i++){
			var $this = this;
			var $out_item = $('<li class="item"></li>').appendTo($this); 
			var $item = $('<a href="'+data[i].link+'" target="_blank"></a>').appendTo($out_item);
			
			var img = $('<img src="'+data[i].img+'"/>').appendTo($item); 
			var $article = $('<article class="da-animate da-slideFromRight" style="display: block;"></article>').appendTo($item);
			var title = $('<h3>'+data[i].title+'</h3>').appendTo($article);
			var content = $('<span>'+data[i].content+'</span>').appendTo($article);
		}
		return $this;
	};
})(jQuery);

