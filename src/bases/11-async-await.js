// async - await
const apiKey = 'r40NbH2ic0gSEYtUxjEQwB2AemaoQcJE';
//el async lo hace promesa
// el await va de la mano con el async
//  el awayt hace que trabajemos como si fuera asincrono
const getImage = async() => {
    try {
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        // el await, hace que se espere hasta que lo indicado termine, entoces como si fuera asincrono
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        return url;
    } catch (error) {
        console.warn(error);
        return undefined;
    }
}

getImage().then(url => {
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
}).catch(err => console.log(err));
