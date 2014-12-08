function Character(id){
    this.Id = id;
    this.Health = 100;
    this.Level = 0;
    this.MoveAnimation = new $.gQ.Animation();
    this.StillAnimation = new $.gQ.Animation();
    this.Name = "Nameless";
    this.Speed = 75;
    
    if ($(this.Id).css("left") === null)
        $(this.Id).css("left", "0");
        
    if ($(this.Id).css("top") === null)
        $(this.Id).css("top", "0");
    
    this.Move = function(horizontal, vertical){
        var func = function(id){
            var x = $(id).position().left;
            x += horizontal;
            if (x < 0){
                x = 0;
            }
            if (x > $(id).parent().width() - $(id).width())
            {
                x = $(id).parent().width() - $(id).width();
            }
            if (x < 0){
                x = 0;
            }
            $(id).css("left", x);
            
            var y = $(id).position().top;
            y += vertical;
            if (y < 0){
                y = 0;
            }
            if (y > $.playground().height() - $(id).height())
            {
                y = $.playground().height() - $(id).height();
            }
            if (y < 0){
                y = 0;
            }
            $(id).css("top", y);
        };
        $(this.Id).setAnimation(this.MoveAnimation);
        func(this.Id);
        window.setTimeout(function(){
            $(this.Id).setAnimation(this.StillAnimation);
        }, 500);
    }
    
    this.Appear = function(){
        $(this.Id).fadeIn("slow");
    };
    
    this.Descend = function(amount){
        this.Move(0, amount * this.Speed);
    }
    
    this.Disappear = function(){
        $(this.Id).fadeOut("slow");
    };
    
    this.Run = function(amount){
        this.Move(amount * this.Speed, 0);
    }
    
    this.Say = function(message){
        showDialogue(this.Name, message);
    }
    
    this.SayChain = function(message, func){
        startDialogueChain("Message from " + this.Name, message, func);
    }
    
    this.Transfigure = function(id, to){
        var tag = "#" + id;
        switch (to) {
            case 'diamond':
                $(tag).setAnimation(diamondAnim);
                $(tag).css("height", "40px");
                break;
            default:
        }
    };
}