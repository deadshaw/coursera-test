(function(){
    var name = ["Popo", "Momo", "Jojo", "Gogo", "Jozo", "Bozo"];
    for(var i = 0; i<name.length; i++){
        var firstLetter = name[i].charAt(0).toLowerCase();
        if (firstLetter === 'j'){
            byeSpeaker.speak(name[i]);
        } 
        else{
            helloSpeaker.speak(name[i]);
        }
    }
}
)();

