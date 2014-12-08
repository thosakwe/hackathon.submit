var Rowan;
var Dragon;

var dragonAnim = new $.gQ.Animation({ imageURL: "../images/dragon/dragon.png",
	numberOfFrame: 5,
	delta: 100,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL});
	
var diamondAnim = new $.gQ.Animation({ imageURL: "../images/diamond.png",
	numberOfFrame: 1,
	delta: 50,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL | $.gQ.ANIMATION_ONCE});

$(document).keydown(function(e){
        switch (e.keyCode) {
            case 65: //left
             rowanDirection = 1;
             Rowan.Run(-1);
             break;
            case 87: //up
              //Rowan.Descend(-1);
              break;
            case 68: //right
              rowanDirection = 0;
              Rowan.Run(1);
              break;
            case 83: //down
              $(window).OpenScriptor();
              break;
        }
        window.setTimeout(function(){
            $("#rowan").setAnimation(rowanStand);
        }, 500);
    });

function setCallbacks(){
}

$.playground().startGame(function(){
    var spr = $("#bg-lvl1").addSprite("rowan", { animation: rowanStand, height: 100, width: 75 });
    $("#rowan").css("top", $.playground().height() - $("#rowan").height());
    Rowan = new Character("#rowan");
    Rowan.Name = "Rowan";
    Rowan.MoveAnimation = rowanMove;
    Rowan.StillAnimation = rowanStand;
    setCallbacks();
    startDialogueChain("Hello, world!", "Greetings, Rowan! Today is the day you become a WebKnight!", function(){
        dialogueChain("WebKnights", "Are you unfamiliar with the terms of today? The year is 3105. Gone are the days of Web 2.0. "
                    + "We live in Web 3.0, the Feudal Web.", function(){
                        dialogueChain("WebKnights", "Years of censorship and invasion of privacy led to a huge fallout across the World. "
                                    + "It's every manor for itself. As a WebKnight, your duty in this world is to protect the privacy "
                                    + "of those living on your manor, and all people all around the world.", function(){
                                        dialogueChain("WebKnights", "But how can you do this, you ask? You're about to find out.", dragonEvents);
                                    })
                    })
    });
});

function dragonEvents(){
    $("#bg-lvl1").addSprite("dragon", { animation: dragonAnim, height: 100, width: 100 });
    $("#dragon").css("top", $.playground().height() - 150);
    $("#dragon").css("left", $("#bg-lvl1").width() - ( 5 * $("#dragon").width()));
    Dragon = new Character("#dragon");
    Dragon.Name = "Dragon";
    Dragon.MoveAnimation = dragonAnim;
    dialogueChain("New Enemy Appeared!", "A hostile dragon spawned! Hit OK to continue.", function(){
        Dragon.Run(-4);
        Dragon.SayChain("Foolish mortal! How dare you challenge me without JavaScript?", function(){
            showDialogue("Scriptor", "See this? This is the most important tool you can have. The Scriptor, a product of "
                        + "32nd-century technology, allows WebKnights to directly influence their worlds through Javascript. "
                        + "Enter \"Rowan.Run(1);\", and see what happens!");
                        $(window).OpenScriptor();
                        window.setTimeout(function(){
                            Scriptor.exec(dragonEvents2);
                        }, 500);
    });
    });
}

function dragonEvents2(){
    Dragon.Say("You dare move so close to ME? I'LL SHOW YOU!");
    window.setTimeout(function(){
        $("#rowan").fadeOut();
        startDialogueChain("Alert", "Uh-oh! The Dragon cast a spell! Let's teach you about Javascript so you can cause yourself "
                    + "to re-appear!", function(){
            dialogueChain("Javascript", "Javascript is the world's most ubiquitous client-side web programming language. "
                        + "It supports several programming paradigms, and is used by WebKnights to fight the evils that "
                        + "threaten privacy.", function(){
                dialogueChain("Objects", "Javascript supports the idea of objects, which can represent anything from a browser window to you, the WebKnight called Rowan.", function(){
                    showDialogue("Object member functions", "Objects are allowed to have any number of qualities, including things known as member functions. "
                               + "Member functions can be called with minimal effort, and provide a method through which to associate given actions with certain objects. Try it yourself! "
                               + "Type \"Rowan.Appear();\" into the Scriptor to continue.");
                    $(window).OpenScriptor();
                    window.setTimeout(function(){
                        Scriptor.exec(dragonEvents3);
                    }, 500);
                });
            });
        });
    }, 2000);
}

function dragonEvents3(){
    if ($("#rowan").css("display") !== "block"){
        $("#rowan").fadeIn(slow);
    }
    startDialogueChain("Success!", "Welcome back to visibility!", function(){
        dialogueChain("Rowan.Run", "Rowan.Run(amount) is a member function of Rowan. Whenever called, Rowan will run a number of steps equivalent to [amount].", function(){
            dialogueChain("Scriptor", "The Scriptor can always be immediately be accessed by pressing the S key. Now, let's vanquish this dragon!", function(){
                showDialogue("Transfiguration", "One of the many member functions at a WebKnight's disposal is Transfiguration. You can easily transform any object you find in this world into something else entirely. By calling Rowan.Transfigure(id, to), you can turn the sprite with the id [id] into whatever is specified by [to]. Try \"Rowan.Transfigure(\"dragon\", \"diamond\");\".");
                $(window).OpenScriptor();
                    window.setTimeout(function(){
                        Scriptor.exec(dragonEvents4);
                    }, 500);
            });
        });
    });
}

function dragonEvents4(){
    Rowan.Transfigure("dragon", "diamond");
    startDialogueChain("Success!", "You've just cleared the introductory level of WebKnights! You've learned what objects and member functions are! Get ready for the next level!", function(){
        $("#bg-lvl1").fadeOut();
        window.setTimeout(function(){
            $("#bg-lvl1").remove();
        }, 2000);
        level("thanks");
    });
}