fetch("js/products.json")
  .then((response) => response.json())
  .then((products) => {
    //article
let article0 = document.querySelector("#article0");
let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");
let article3 = document.querySelector("#article3");
let article4 = document.querySelector("#article4");
let article5 = document.querySelector("#article5");
let article6 = document.querySelector("#article6");
let article7 = document.querySelector("#article7");
let article8 = document.querySelector("#article8");
let article9 = document.querySelector("#article9");

//title PRIMO OBJ
let title = document.createElement("h2");
title.innerHTML = products[0].name;
article0.appendChild(title);
//descrizione
let descrizione = document.createElement("p");
descrizione.innerHTML = "Descrizione: " + products[0].description;
article0.appendChild(descrizione);
//prezzo
let prezzo = document.createElement("p");
prezzo.innerHTML = "Prezzo: " + products[0].price+"€";
article0.appendChild(prezzo);
//disponibile
let disponibile = document.createElement("p");
disponibile.innerHTML = products[0].available ? "Disponibile: si" : "Disponibile: no";
article0.appendChild(disponibile);
//spedizione
let spedizione = document.createElement("p");
spedizione.innerHTML = products[0].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[0].shipping.price;
article0.appendChild(spedizione);
//spedito da
let spedito = document.createElement("p");
spedito.innerHTML = "Spedizione: " + products[0].shipping.from;
article0.appendChild(spedito);
//destinazioni
let destinazioni = document.createElement("p");
destinazioni.innerHTML = "Destinazioni disponibili: " + products[0].shipping.to;
article0.appendChild(destinazioni);
//tempi
let tempo = document.createElement("p");
tempo.innerHTML = "Tempi di spedizione: " + products[0].shipping.duration;
article0.appendChild(tempo);

//title SECONDO OBJ
let title1 = document.createElement("h2");
title1.innerHTML = products[1].name;
article1.appendChild(title1);
//descrizione
let descrizione1 = document.createElement("p");
descrizione1.innerHTML = "Descrizione: " + products[1].description;
article1.appendChild(descrizione1);
//prezzo
let prezzo1 = document.createElement("p");
prezzo1.innerHTML = "Prezzo: " + products[1].price+"€";
article1.appendChild(prezzo1);
//disponibile
let disponibile1 = document.createElement("p");
disponibile1.innerHTML = products[1].available ? "Disponibile: si" : "Disponibile: no";
article1.appendChild(disponibile1);
//spedizione
let spedizione1 = document.createElement("p");
spedizione1.innerHTML = products[1].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[1].shipping.price;
article1.appendChild(spedizione1);
//spedito da
let spedito1 = document.createElement("p");
spedito1.innerHTML = "Spedizione: " + products[1].shipping.from;
article1.appendChild(spedito1);
//destinazioni
let destinazioni1 = document.createElement("p");
destinazioni1.innerHTML = "Destinazioni disponibili: " + products[1].shipping.to;
article1.appendChild(destinazioni1);
//tempi
let tempo1 = document.createElement("p");
tempo1.innerHTML = "Tempi di spedizione: " + products[1].shipping.duration;
article1.appendChild(tempo1);

//title SECONDO OBJ
let title2 = document.createElement("h2");
title2.innerHTML = products[2].name;
article2.appendChild(title2);
//descrizione
let descrizione2 = document.createElement("p");
descrizione2.innerHTML = "Descrizione: " + products[2].description;
article2.appendChild(descrizione2);
//prezzo
let prezzo2 = document.createElement("p");
prezzo2.innerHTML = "Prezzo: " + products[2].price+"€";
article2.appendChild(prezzo2);
//disponibile
let disponibile2 = document.createElement("p");
disponibile2.innerHTML = products[2].available ? "Disponibile: si" : "Disponibile: no";
article2.appendChild(disponibile2);
//spedizione
let spedizione2 = document.createElement("p");
spedizione2.innerHTML = products[2].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[2].shipping.price;
article2.appendChild(spedizione2);
//spedito da
let spedito2 = document.createElement("p");
spedito2.innerHTML = "Spedizione: " + products[2].shipping.from;
article2.appendChild(spedito2);
//destinazioni
let destinazioni2 = document.createElement("p");
destinazioni2.innerHTML = "Destinazioni disponibili: " + products[2].shipping.to;
article2.appendChild(destinazioni2);
//tempi
let tempo2 = document.createElement("p");
tempo2.innerHTML = "Tempi di spedizione: " + products[2].shipping.duration;
article2.appendChild(tempo2);

//title TERZO OBJ
let title3 = document.createElement("h2");
title3.innerHTML = products[3].name;
article3.appendChild(title3);
//descrizione
let descrizione3 = document.createElement("p");
descrizione3.innerHTML = "Descrizione: " + products[3].description;
article3.appendChild(descrizione3);
//prezzo
let prezzo3 = document.createElement("p");
prezzo3.innerHTML = "Prezzo: " + products[3].price+"€";
article3.appendChild(prezzo3);
//disponibile
let disponibile3 = document.createElement("p");
disponibile3.innerHTML = products[3].available ? "Disponibile: si" : "Disponibile: no";
article3.appendChild(disponibile3);
//spedizione
let spedizione3 = document.createElement("p");
spedizione3.innerHTML = products[3].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[3].shipping.price;
article3.appendChild(spedizione3);
//spedito da
let spedito3 = document.createElement("p");
spedito3.innerHTML = "Spedizione: " + products[3].shipping.from;
article3.appendChild(spedito3);
//destinazioni
let destinazioni3 = document.createElement("p");
destinazioni3.innerHTML = "Destinazioni disponibili: " + products[3].shipping.to;
article3.appendChild(destinazioni3);
//tempi
let tempo3 = document.createElement("p");
tempo3.innerHTML = "Tempi di spedizione: " + products[3].shipping.duration;
article3.appendChild(tempo3);

//title QUARTO OBJ
let title4 = document.createElement("h2");
title4.innerHTML = products[4].name;
article4.appendChild(title4);
//descrizione
let descrizione4 = document.createElement("p");
descrizione4.innerHTML = "Descrizione: " + products[4].description;
article4.appendChild(descrizione4);
//prezzo
let prezzo4 = document.createElement("p");
prezzo4.innerHTML = "Prezzo: " + products[4].price+"€";
article4.appendChild(prezzo4);
//disponibile
let disponibile4 = document.createElement("p");
disponibile4.innerHTML = products[4].available ? "Disponibile: si" : "Disponibile: no";
article4.appendChild(disponibile4);
//spedizione
let spedizione4 = document.createElement("p");
spedizione4.innerHTML = products[4].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[4].shipping.price;
article4.appendChild(spedizione4);
//spedito da
let spedito4 = document.createElement("p");
spedito4.innerHTML = "Spedizione: " + products[4].shipping.from;
article4.appendChild(spedito4);
//destinazioni
let destinazioni4 = document.createElement("p");
destinazioni4.innerHTML = "Destinazioni disponibili: " + products[4].shipping.to;
article4.appendChild(destinazioni4);
//tempi
let tempo4 = document.createElement("p");
tempo4.innerHTML = "Tempi di spedizione: " + products[4].shipping.duration;
article4.appendChild(tempo4);

//title QUINTO OBJ
let title5 = document.createElement("h2");
title5.innerHTML = products[5].name;
article5.appendChild(title5);
//descrizione
let descrizione5 = document.createElement("p");
descrizione5.innerHTML = "Descrizione: " + products[5].description;
article5.appendChild(descrizione5);
//prezzo
let prezzo5 = document.createElement("p");
prezzo5.innerHTML = "Prezzo: " + products[5].price+"€";
article5.appendChild(prezzo5);
//disponibile
let disponibile5 = document.createElement("p");
disponibile5.innerHTML = products[5].available ? "Disponibile: si" : "Disponibile: no";
article5.appendChild(disponibile5);
//spedizione
let spedizione5 = document.createElement("p");
spedizione5.innerHTML = products[5].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[5].shipping.price;
article5.appendChild(spedizione5);
//spedito da
let spedito5 = document.createElement("p");
spedito5.innerHTML = "Spedizione: " + products[5].shipping.from;
article5.appendChild(spedito5);
//destinazioni
let destinazioni5 = document.createElement("p");
destinazioni5.innerHTML = "Destinazioni disponibili: " + products[5].shipping.to;
article5.appendChild(destinazioni5);
//tempi
let tempo5 = document.createElement("p");
tempo5.innerHTML = "Tempi di spedizione: " + products[5].shipping.duration;
article5.appendChild(tempo5);

//title SESTO OBJ
let title6 = document.createElement("h2");
title6.innerHTML = products[6].name;
article6.appendChild(title6);
//descrizione
let descrizione6 = document.createElement("p");
descrizione6.innerHTML = "Descrizione: " + products[6].description;
article6.appendChild(descrizione6);
//prezzo
let prezzo6 = document.createElement("p");
prezzo6.innerHTML = "Prezzo: " + products[6].price+"€";
article6.appendChild(prezzo6);
//disponibile
let disponibile6 = document.createElement("p");
disponibile6.innerHTML = products[6].available ? "Disponibile: si" : "Disponibile: no";
article6.appendChild(disponibile6);
//spedizione
let spedizione6 = document.createElement("p");
spedizione6.innerHTML = products[6].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[6].shipping.price;
article6.appendChild(spedizione6);
//spedito da
let spedito6 = document.createElement("p");
spedito6.innerHTML = "Spedizione: " + products[6].shipping.from;
article6.appendChild(spedito6);
//destinazioni
let destinazioni6 = document.createElement("p");
destinazioni6.innerHTML = "Destinazioni disponibili: " + products[6].shipping.to;
article6.appendChild(destinazioni6);
//tempi
let tempo6 = document.createElement("p");
tempo6.innerHTML = "Tempi di spedizione: " + products[6].shipping.duration;
article6.appendChild(tempo6);

//title SETTIMO OBJ
let title7 = document.createElement("h2");
title7.innerHTML = products[7].name;
article7.appendChild(title7);
//descrizione
let descrizione7 = document.createElement("p");
descrizione7.innerHTML = "Descrizione: " + products[7].description;
article7.appendChild(descrizione7);
//prezzo
let prezzo7 = document.createElement("p");
prezzo7.innerHTML = "Prezzo: " + products[7].price+"€";
article7.appendChild(prezzo7);
//disponibile
let disponibile7 = document.createElement("p");
disponibile7.innerHTML = products[7].available ? "Disponibile: si" : "Disponibile: no";
article7.appendChild(disponibile7);
//spedizione
let spedizione7 = document.createElement("p");
spedizione7.innerHTML = products[7].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[7].shipping.price;
article7.appendChild(spedizione7);
//spedito da
let spedito7 = document.createElement("p");
spedito7.innerHTML = "Spedizione: " + products[7].shipping.from;
article7.appendChild(spedito7);
//destinazioni
let destinazioni7 = document.createElement("p");
destinazioni7.innerHTML = "Destinazioni disponibili: " + products[7].shipping.to;
article7.appendChild(destinazioni7);
//tempi
let tempo7 = document.createElement("p");
tempo7.innerHTML = "Tempi di spedizione: " + products[7].shipping.duration;
article7.appendChild(tempo7);

//title OTTAVO OBJ
let title8 = document.createElement("h2");
title8.innerHTML = products[8].name;
article8.appendChild(title8);
//descrizione
let descrizione8 = document.createElement("p");
descrizione8.innerHTML = "Descrizione: " + products[8].description;
article8.appendChild(descrizione8);
//prezzo
let prezzo8 = document.createElement("p");
prezzo8.innerHTML = "Prezzo: " + products[8].price+"€";
article8.appendChild(prezzo8);
//disponibile
let disponibile8 = document.createElement("p");
disponibile8.innerHTML = products[8].available ? "Disponibile: si" : "Disponibile: no";
article8.appendChild(disponibile8);
//spedizione
let spedizione8 = document.createElement("p");
spedizione8.innerHTML = products[8].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[8].shipping.price;
article8.appendChild(spedizione8);
//spedito da
let spedito8 = document.createElement("p");
spedito8.innerHTML = "Spedizione: " + products[8].shipping.from;
article8.appendChild(spedito8);
//destinazioni
let destinazioni8 = document.createElement("p");
destinazioni8.innerHTML = "Destinazioni disponibili: " + products[8].shipping.to;
article8.appendChild(destinazioni8);
//tempi
let tempo8 = document.createElement("p");
tempo8.innerHTML = "Tempi di spedizione: " + products[8].shipping.duration;
article8.appendChild(tempo8);

//title NONO OBJ
let title9 = document.createElement("h2");
title9.innerHTML = products[9].name;
article9.appendChild(title9);
//descrizione
let descrizione9 = document.createElement("p");
descrizione9.innerHTML = "Descrizione: " + products[9].description;
article9.appendChild(descrizione9);
//prezzo
let prezzo9 = document.createElement("p");
prezzo9.innerHTML = "Prezzo: " + products[9].price+"€";
article9.appendChild(prezzo9);
//disponibile
let disponibile9 = document.createElement("p");
disponibile9.innerHTML = products[9].available ? "Disponibile: si" : "Disponibile: no";
article9.appendChild(disponibile9);
//spedizione
let spedizione9 = document.createElement("p");
spedizione9.innerHTML = products[9].shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + products[9].shipping.price;
article9.appendChild(spedizione9);
//spedito da
let spedito9 = document.createElement("p");
spedito9.innerHTML = "Spedizione: " + products[9].shipping.from;
article9.appendChild(spedito9);
//destinazioni
let destinazioni9 = document.createElement("p");
destinazioni9.innerHTML = "Destinazioni disponibili: " + products[9].shipping.to;
article9.appendChild(destinazioni9);
//tempi
let tempo9 = document.createElement("p");
tempo9.innerHTML = "Tempi di spedizione: " + products[9].shipping.duration;
article9.appendChild(tempo9);
    }
  );