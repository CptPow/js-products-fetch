fetch("js/products.json")
  .then((response) => response.json())
  .then((products) => {
    let article0 = document.querySelector("#article0");
    //for each
    products.forEach(prodotti => {
      let title = document.createElement("h3");
      title.innerHTML = prodotti.name;
      article0.appendChild(title);
    
      let description = document.createElement("p");
      description.innerHTML = "Descrizione: " + prodotti.description;
      article0.appendChild(description);
    
      let prezzo = document.createElement("p");
    prezzo.innerHTML = "Prezzo: " + prodotti.price+"€";
    article0.appendChild(prezzo);
    
    let disponibile = document.createElement("p");
    disponibile.innerHTML = prodotti.available ? "Disponibile: si" : "Disponibile: no";
    article0.appendChild(disponibile);
    
     let spedizione = document.createElement("p");
     spedizione.innerHTML = prodotti.shipping.free ? "Spedizione: Gratuita" : "Spedizione: " + prodotti.shipping.price;
     article0.appendChild(spedizione);
    
     let spedito = document.createElement("p");
    spedito.innerHTML = "Spedizione: " + prodotti.shipping.from;
    article0.appendChild(spedito);
    
    let destinazioni = document.createElement("p");
    destinazioni.innerHTML = "Destinazioni disponibili: " + prodotti.shipping.to;
    article0.appendChild(destinazioni);
    
    let tempo = document.createElement("p");
    tempo.innerHTML = "Tempi di spedizione: " + prodotti.shipping.duration;
    article0.appendChild(tempo);
    });
    }
  );