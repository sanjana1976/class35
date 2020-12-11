class Form{
    constructor(){}
    display(){
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(300,30);

var input= createInput('name')
var button= createButton('play')
input.position(230,160);
button.position(250,200);
button.mousePressed(function(){
    input.hide();
    button.hide();

    var name= input.value();
    playerCount+=1
    player.update(name);
    player.updateCount(playerCount);

    var greeting= createElement('h3');
    greeting.html("hello "+ name);
    greeting.position(230,160);

})
}

}