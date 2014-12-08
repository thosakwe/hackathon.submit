var rowanStand = new $.gQ.Animation({ imageURL: "../images/stand.png",
	numberOfFrame: 1,
	delta: 75,
	rate: 90,
	type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});
	
var rowanMove = new $.gQ.Animation({ imageURL: "../images/walksheet.png",
	numberOfFrame: 8,
	delta: 75,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL});
	
var rowanDirection = 0;