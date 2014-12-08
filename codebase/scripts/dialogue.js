//Dialogue plugin

$.fn.dialogue = function(title, text){
    $(".dialogue").fadeIn("slow");
    $(".dialogue .dialogue-header").text(title);
    $(".dialogue .dialogue-body")
        .text(text)
        .append("<button class=\"btn btn-dialogue\" onclick=\"closeDialogue();\">OK</button>");
    return this;
};

$.fn.dialogue2 = function(title, text){
    $(".dialogue .dialogue-header").text(title);
    $(".dialogue .dialogue-body")
        .text(text)
        .append("<button class=\"btn btn-dialogue\" onclick=\"closeDialogue();\">OK</button>");
    return this;
};

$.fn.sequence = function(title, text){
    $(".btn-dialogue").click(function(){
                            $(".dialogue").dialogue2(title, text);
                        });
    return this;
}

$.fn.sequence = function(title, text, func){
    dialogueChain($(".dialogue .dialogue-header").text(), $(".dialogue .dialogue-body").text(), function(){
        
    });
}

function closeDialogue(){
    $(".dialogue").fadeOut("slow");
}

function dialogueChain(title, text, func){
    $(".dialogue .dialogue-header").text(title);
    $(".dialogue .dialogue-body")
        .text(text)
        .append("<button class=\"btn btn-dialogue\">OK</button>");
    $(".btn-dialogue").on("click", func);
    return this;
}

function endDialogueChain(title, text){
    dialogueChain(title, text, closeDialogue);
}

function showDialogue(title, text){
    return $(".dialogue").dialogue(title, text);
}

function startDialogueChain(title, text, func){
    $(".dialogue").fadeIn("slow");
    $(".dialogue .dialogue-header").text(title);
    $(".dialogue .dialogue-body")
        .text(text)
        .append("<button class=\"btn btn-dialogue\">OK</button>");
    $(".btn-dialogue").on("click", func);
    return this;
}