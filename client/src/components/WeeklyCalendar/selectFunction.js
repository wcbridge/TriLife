export const selector = props => {
    var chosenOne = document.getElementById("choosie").value;
    if(chosenOne === "1"){
       chosenOne.css("background-color","blue");
    }
}
