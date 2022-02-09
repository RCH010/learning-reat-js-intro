// Fetch API
// -> esto ya viene en el navegador
const apiKey = 'r40NbH2ic0gSEYtUxjEQwB2AemaoQcJE';
const petition = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//promesas encadenadas
petition
    .then( res => res.json() )
    .then( ({data}) => {
        const {images} = data;
        const {url} = images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(err => console.warn(err) )