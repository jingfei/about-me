$(function(){
	$("#act").arrangeActGrid([
		{ img: "./img/act/01.jpg", head: "Sep. 2015 - Oct. 2016", title: "iGem, National Cheng Kung Univ.", content: "Join the team of iGem, and I am in the IT group. iGem is an international competition of synthetic biology, it combines the knowledge of biology, engineering, and computer science." },
		{ img: "./img/act/02.jpg", head:  "Sep. 2014 - Aug. 2015", title: "Future Elites, College of Engineering", content: "Became a member of Future Elites class (College of Engineering), we had leadership and English training course. Besides, I was the organizer of our social care activity, <a href='http://prezi.com/ddzo7ifyzsaz/?utm_campaign=share&utm_medium=copy&rc=ex0share' target='_blank'>Care Week</a>." },
		{ img: "./img/act/03.jpg", head:  "Jul. 2015 - Aug. 2015", title: "Future Elites, College of Engineering", content: "During summer vacation, we joined leadership workshop in Indiana University Purdue University Fort Wayne, and visiting the companies, schools in Chicago, Boston and New York." },
		{ img: "./img/act/04.jpg", head: "Feb. 2014 - Aug. 2015", title: "Tainan National Girl's Senior High",  content: "Taught C language in high school's club" },
		{ img: "./img/act/05.jpg", head: "Nov. 2012 - present", title: "Titans Women's Baseball Team", content: "Leader of <a href='http://facebook.com/titanswomensbaseball' target='_blank'>Titans women's baseball</a> team in Kaohsiung" },
		{ img: "./img/act/06.jpg", head: "Oct. 2012 - present", title: "CSIE, National Cheng Kung Univ.", content: "Joined ACM training team to participate in competitive contests" },
		{ img: "./img/cover.jpg", head: "May 2014", title: "National Cheng Kung University", content: "Organized 1st EDiT workshop activity, our website <a target='_blank' href='http://edit.flipedu.tw'>http://edit.flipedu.tw/</a>" },
		{ img: "./img/cover.jpg", head: "Sep. 2012 - Jun. 2014", title: "CCNS, National Cheng Kung Univ.", content: "Joined <a href='https://prezi.com/skfya7w0i4cu/ncku_ccns/' target='_blank'>CCNS Club (Campus Computer & Network Society)</a> and have served as President and also have taught." },
		{ img: "./img/cover.jpg", head: "Jul. 2010 - Jun. 2011", title: "Information Research Club, TNGS", content: "President of high school's club (Information Research Club)" }
	]);
});

;(function($, undefined) {
	$.fn.arrangeActGrid = function(data, options) {
		var $this = this,
			W = $this.width(),
			H = $this.height();
		
		var num = parseInt( (W-40) / 350 );
		
		for (var i = 0, len = data.length; i < len; i++){
			var $card = $('<div class="card"></div>').appendTo($this);
			$card.attr("id", "act"+i);
			
			var out_img = $('<div class="outside__image"></div>').appendTo($card);
			var img = $('<div class="card__image"></div>').appendTo(out_img);
			img.css({"background": "url('"+data[i].img+"') no-repeat center center",
					 "background-size": "auto 300px"})
				.mouseenter(function(){
					 $(this).addClass("transition");
				 })
				 .mouseleave(function(){
					 $(this).removeClass("transition");
				 });	 
			var head = $('<h2 class="card__title">'+data[i].head+'</h2>').appendTo($card);
			var content = $('<p class="card__text">'+data[i].content+'</p>').appendTo($card);
			var title = $('<div class="card__subtitle">'+data[i].title+'</div>').appendTo($card);
		}
		
		return $this;
	};
})(jQuery);

