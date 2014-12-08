var Scriptor;
var toContact;

$.fn.OpenScriptor = function(){
    Scriptor = window.open("../scriptor.html", "scriptor", "height=200,width=500,menubar=no,status=no");
    Scriptor.Exec = function(func){
        func();
    };
    if (!Scriptor.opener){
        Scriptor.opener = this.window;
    }
    Scriptor.focus();
};

$.fn.OpenScriptor2 = function(){
    Scriptor = window.open("../scriptor.html", "scriptor", "height=200,width=500,menubar=no,status=no");
    func();
    if (!Scriptor.opener){
        Scriptor.opener = this.window;
    }
    Scriptor.focus();
};

$.fn.OpenScriptorChain = function(func){
    Scriptor = window.open("../scriptor.html", "scriptor", "height=200,width=500,menubar=no,status=no");
    Scriptor.exec(func);
    if (!Scriptor.opener){
        Scriptor.opener = this.window;
    }
    Scriptor.focus();
};

function ScriptNotify(script){
    opener.focus();
    $("#scr").val("");
    return opener.receiveScript(script);
}

function ScriptNotifyChain(script, func){
    opener.focus();
    $("#scr").val("");
    var ret = opener.receiveScript(script);
    func();
    return ret;
}