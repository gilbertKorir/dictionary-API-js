const url ="";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () =>{
    let inpword = document.getElementById("inp-word").value;
    console.log(inpword);

    fetch(`${url}${inpword}`)
          .then((response) => response.json)
          .then((data) => console.log(data))

});
