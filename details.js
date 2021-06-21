const api_url = 'https://restcountries.eu/rest/v2/all'

function getCode(){
    const codeparameter = location.search.substring(1).split("=")[1];
    fetch(api_url).then((response)=>response.json())
    .then((result)=>{
        for(let i=0; i< result.length; i++){
            let obj = result[i];
            let flag = obj.flag;
            let name = obj.name;
            let nativeName = obj.nativeName;
            let pop = obj.population;
            let region = obj.region;
            let subregion = obj.subregion;
            let capital = obj.capital;
            let topLevelDomain = obj.topLevelDomain;
            let currencies = obj.currencies;
            let lang = obj.languages;
            let borderCountries = obj.borders;
            if(obj.alpha2Code == codeparameter){
                createDetails(flag,name,nativeName,pop,region,subregion,capital,topLevelDomain,currencies,lang,borderCountries);
            }             
        }

       

    })
}

getCode();

function createDetails(flag,name,nativeName,pop,region,subregion,capital,topLevelDomain,currencies,lang,borderCountries){
    let flagImage = document.createElement("img");
    flagImage.src = flag;

    let nameInBold = document.createElement("h1");
    nameInBold.innerText = name;

    let splitdiv = document.createElement("div");
    splitdiv.className = "splitdiv";

    let leftdiv = document.createElement("div");
    leftdiv.className = "left";
    
    let rightdiv = document.createElement("div");
    rightdiv.className = "right";

    let borders = document.createElement("div");

    let p1 = document.createElement("p");
    p1.innerText = "Native Name: " + nativeName;

    let p2 = document.createElement("p");
    p2.innerText = "Population: " + pop;

    let p3 = document.createElement("p");
    p3.innerText = "Region: " + region;

    let p4 = document.createElement("p");
    p4.innerText = "Sub Region: " + subregion;

    let p5 = document.createElement("p");
    p5.innerText = "Capital: " + capital;

    let p6 = document.createElement("p");
    p6.innerText = "Top Level Domain: " + topLevelDomain;

    let p7 = document.createElement("p");
    p7.innerText = "Currencies: ";
    for(let i=0;i<currencies.length; i++)
    {  
          p7.innerText += " ";
        p7.innerText += currencies[i].name  + ",";
    }

    let p8 = document.createElement("p");
    p8.innerText = "Languages: ";
    for(let i=0;i<lang.length; i++)
    {
        p8.innerText += " ";
        p8.innerText += lang[i].name + ",";
    }




    let borderp = document.createElement("p");
    borderp.innerText = "Border Countries: ";
    for(let i=0;i<borderp.length; i++)
    {
        borderp.innerText += " ";
        borderp.innerText += borderp[i].name + ",";
    }
    
    borderp.innerText = borderCountries;
    
    document.getElementById("flag").appendChild(flagImage);
    document.getElementById("info").appendChild(nameInBold);
    document.getElementById("info").appendChild(splitdiv);
    

    splitdiv.appendChild(leftdiv);
    leftdiv.appendChild(p1);
    leftdiv.appendChild(p2);
    leftdiv.appendChild(p3);
    leftdiv.appendChild(p4);
    leftdiv.appendChild(p5);

    splitdiv.appendChild(rightdiv);
    rightdiv.appendChild(p6);
    rightdiv.appendChild(p7);
    rightdiv.appendChild(p8);

    
    document.getElementById("border").appendChild(borderp);
}
    