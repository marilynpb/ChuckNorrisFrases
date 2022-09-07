


const conectar = async()=>{
    try{
        const response= await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);

        if(response.status===200){
            
                const data= await response.json();
                mostrar= await (data.value);
                let frase = `<h2 class="fraseH1">${mostrar}</h2>`
                document.getElementById("container").innerHTML= frase;
        }
        else{
            console.log('Hubo un error!')
        }

    }catch(error){
        console.log(error);
    }
    
}
