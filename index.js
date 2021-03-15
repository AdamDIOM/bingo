async function newCard(){
    var phrases = [];
    var text;
    /*fetch('phrases.txt')
    .then(response => response.text())
    .then(text => {
        console.log(text);
        textstr = text;
    } );*/
    const response = await fetch('phrases.txt')
    .then(response => response.text())
    text = response;
    console.log(text);
    phrases = text.split(/\n/)
    /*for(phrase in phrases){
        console.log(phrase + ": " +phrases[phrase]);
    }*/

    var randomPhrases = [];
    for(i = 0; i < 16; i++){
        //console.log("length " + phrases.length);
        random = Math.floor(Math.random() * phrases.length);
        randomPhrases.push(phrases[random]);
        //console.log(phrases[random]);
        phrases.splice(random,1);
        //console.log(random);
        //console.log(i);
    }

    for(phrase in randomPhrases){
        console.log(randomPhrases[phrase]);
    }

    for(i = 0; i < 16; i++){
        cell = document.getElementById(i);
        cell.innerHTML = randomPhrases[i];
    }

    console.log("new card requested");
};


function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
      newCard();
    } else {
       text = "Cookies are not enabled.";
       newCard();
    }
    console.log(text);
  }
