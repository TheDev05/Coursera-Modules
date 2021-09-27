(function() {
    var names = ["Yash", "Jack", "Jonathan", "James", "Phoenix", "Frankie", "Liam", "Patrick", "Leo", "Jacob"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
