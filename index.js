window.onload(newDog());
function newDog(){
    fetch("https://dog.ceo/api/breed/corgi/images/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //var content = document.getElementById("content");
            var x = data.message;
            //console.log(x);
            //var toAdd = `<img src'${x}'/>`;
            //console.log(toAdd);
            //content.innerHTML += toAdd;
            var image = document.getElementById("image");
            image.src = x;
        })
};
