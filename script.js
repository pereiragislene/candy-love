$(document).ready(function () {
    var dict = {};
    dict.orangered = "One thing that you love about your job.";
    dict.yellow = "A life goal you are working on.";
    dict.lawngreen = "Your favorite book or movie.";
    dict.mediumpurple = "Favorite way to revive yourself during the workday.";
    dict.deepskyblue = "One stressful thing about your job you wish you could improve.";
    dict.orange = "Your favorite food.";

    var dictKey = Object.keys(dict)[Math.floor(Math.random()*Object.keys(dict).length)];
    console.log(dictKey);
   	$('body').each(function(i) {
    	$(this).css('background', dictKey);
      var element = document.getElementById("value");
      element.innerHTML = dict[dictKey];
    });
})
