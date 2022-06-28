const base ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const loading = document.getElementById("loading");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () =>{
    let inpword = document.getElementById("inp-word").value;
    // console.log(inpword);

    fetch(`${base}${inpword}`)
          .then((response) => response.json())
          .then((data) => { 
            console.log(data)
    
            result.innerHTML = `
            <div class="word">
        
            <h3>${inpword}</h3>

          <button>
          <i class="fa-solid fa-microphone"></i>
          </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
           ${data[0].meanings[0].definitions[0].example ||""}
        </p>`;
        sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`);
        })
        .catch(()=>{
          result.innerHTML = `<h3>Word does not exist</h3>`;
        })
        if (typeof data[0] === 'string') {
          console.log(data);
          loading.innerText = "No such word";
      
          return;
        } else {
          loading.style.display = "none";
          result.innerText = data.shortdef[0];
        }
});

function playSound(){
  sound.play();
}