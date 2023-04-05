// to add all elements addEvenListener & disappear anytime to display none

const btn = document.getElementsByClassName("m-3");
  for(const bans of btn){
    bans.addEventListener("click", function(event){
        // 1st way to disappear div
       console.log( event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode));

      // 2nd way to disappear div
       console.log( event.target.parentNode.parentNode.style.display = "none");
    });
  }


















//   console.log(btn);