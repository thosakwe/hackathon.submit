$(document).ready(WebKnight);

function ReceiveScript(script){
    try {
        eval(script);
        return 0;
    } catch (e) {
        alert(e);
        return 1;
    }
}

var receiveScript = this.ReceiveScript;

function level(lvl){
    var url = "../levels/" + String(lvl) + ".html";
    $.get(url, function(html){
        $("#playground").html(html);
        url = "../levels/" + String(lvl) + ".js";
        $.getScript(url);
    });
}

function WebKnight(){
    var pgWidth = $("#playground").parent().width();
    var pgHeight = 500;
    $("#playground").playground({width: pgWidth, height: pgHeight});
    level(0);
}