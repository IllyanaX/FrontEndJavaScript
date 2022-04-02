const fetchPokemon = () => {
    const ingresoInput = document.getElementById("ingreso");
    let ingreso = ingresoInput.value;

    // Convierte todo la cadena a minúsculas.
    ingreso = ingreso.toLowerCase();

    // Enlace para buscar pokemon.
    const url = `https://pokeapi.co/api/v2/pokemon/${ingreso}`;

    // fetch hace la petición y .then hace la entrega.
    // res es la respuesta de la petición.
    fetch(url).then((res) => {

        // Un status diferente a 200 genera un problema y coloca de imagen a squirtle llorando.
        if (res.status != "200") {
            pokeIm("imge/llorar.png");
        
        // Si el status es 200 arroja la respuesta pedida.    
        }else {
            // La respuesta se pasa a formato json.
            return res.json();
        }
    // Si el status fue 200 arroja la data solicitada.     
    }).then((data) => {
        if (data) {
            let pokeNom = data.name;
            pokeDataName = document.getElementById("pokeNa");
            pokeDataName.textContent = `nombre: ${pokeNom}`;

            let pokeT = data.types[0].type.name;
            pokeDataT = document.getElementById("pokeTi");
            pokeDataT.textContent = `tipo: ${pokeT}`; 

            let pokebola = data.sprites.front_default;
            pokeIm(pokebola);
        }
    });
}

/* pokeIm es una función, pokeR es una constante y 
pokebola es el id de la imagen que se mostrará. */
const pokeIm = (url) => {
    const pokeR = document.getElementById("pokebola");
    pokeR.src = url;
}

