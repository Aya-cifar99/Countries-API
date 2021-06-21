
const api_url = 'https://restcountries.eu/rest/v2/all'
let flag;
let code;
function getCards(){
    fetch(api_url).then((response)=>response.json())
    .then((result)=>{
        for(let i=0; i< result.length; i++){
            let obj = result[i];
            let name = obj.name;
            flag = obj.flag;
            code = obj.alpha2Code;
            let pop = obj.population;
            let region = obj.region;
            let capital = obj.capital;
            createCard(flag,name,pop,region,capital,code);             
        }

        addEventListeners();

    })
}

getCards();



function addEventListeners() {
    const clickable = document.querySelectorAll('.card');
    clickable.forEach((element) => {
        console.log(element.getElementsByTagName("h4")[0].innerHTML);
     
        element.addEventListener('click', () => {
        console.log(element.id);
        window.open("details.html?code="+element.id,"_self");
       
    })
       
    });
   
   
 }



function createCard(flag,name,pop,region,capital,code){
      
    let card = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    
    card.className = "card";
    card.id = code;

    card.style.maxWidth = "1200px";
    card.style.display = "grid"


    img.className = "flag";
    img.src = flag;
    img.id = "image_card";
    h4.innerText = name;
    p1.innerText = "Population: " + pop;
    p2.innerText = "Region: " + region;
    p3.innerText = "Capital: " + capital;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    document.getElementById("cards").appendChild(card);
}