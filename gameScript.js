// store a string
/*var text = "Look at me Codaisseuring!";
document.write(text);
window.alert(text);*/

//store an equation
/*var num1 = 1;
var num2 = 2;
console.log(num1 + num2);*/

//store an equation
/*var sum = 10 + 5;
document.write(sum);*/
var counter = 0;

var balloon = $( ".balloon" );

var bg = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

balloon.hide();

for(var i = 0; i < 50; i++){
  var balloon_width, balloon_height, xdiff;
  var balloonCopy = balloon.clone();
  inflatable = balloonCopy.find('.inflatable');
  string = balloonCopy.find('.string');
  balloon_width = Math.max(20, Math.floor(Math.random() * 90) + 30);
  balloon_height = 1.2 * balloon_width;
  $(inflatable).css({
    'background-image': 'url(' + bg[Math.floor(Math.random() * bg.length)] + ')',
    width: balloon_width,
    height: balloon_height
  });
  string.css({"margin-left": (0.5*balloon_width), height: (0.5*balloon_height)});
  balloonCopy.css({
      left: '50%', bottom: 0
    });
  balloonCopy.appendTo( "body" );
  balloonCopy.click(function() {
    $(this).remove();
    counter = counter + 1;
    $(".counter").html(counter);
  });
  var xdiff = Math.floor(Math.random() * 100);
  balloonCopy.show();
  balloonCopy.animate({bottom: '100%', left: xdiff + "%"}, (12000 - balloon_width*50));
};
  //balloonCopy.animate({bottom: "100%"}, 8000);
//};

balloon.remove();

/*var balloon2 = $( ".balloon2" );

for(var i = 0; i < 10; i++){
  var balloonCopy2 = balloon2.clone();
  balloonCopy2.css({
    left: i * 200
  });
  balloonCopy2.appendTo( "body" );
  balloonCopy2.click(function() {
    $(this).remove();
  });
};

balloon3.remove();

var balloon3 = $( ".balloon3" );

for(var i = 0; i < 10; i++){
  var balloonCopy3 = balloon3.clone();
  balloonCopy3.css({
    left: i * 200
  });
  balloonCopy3.appendTo( "body" );
  balloonCopy3.click(function() {
    $(this).remove();
  });
};

balloon3.remove();

var balloon4 = $( ".balloon4" );

for(var i = 0; i < 10; i++){
  var balloonCop4 = balloon4.clone();
  balloonCopy4.css({
    left: i * 200
  });
  balloonCopy4.appendTo( "body" );
  balloonCopy4.click(function() {
    $(this).remove();
  });
};

balloon4.remove();

var balloon5 = $( ".balloon5" );

for(var i = 0; i < 10; i++){
  var balloonCopy5 = balloon5.clone();
  balloonCopy5.css({
    left: i * 200
  });
  balloonCopy5.appendTo( "body" );
  balloonCopy5.click(function() {
    $(this).remove();
  });
};

balloon5.remove();*/
