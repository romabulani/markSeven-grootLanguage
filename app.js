var btnTranslate = document.querySelector("#translate-button");
var input = document.querySelector("#input");
var output =  document.querySelector("#output");
var serverURL = "	https://api.funtranslations.com/translate/groot.json";
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    alert("Something is wrong! Please try after some time.");
    console.log("Error : " + error);
}

function clickHandler(){
    // console.log("clicked");
    var inputText = input.value;
    console.log(inputText);

    fetch(getUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
       })
    .catch(errorHandler)

}
btnTranslate.addEventListener("click",clickHandler);