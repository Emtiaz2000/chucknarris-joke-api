//console.log('connected');
//container
let containter = document.querySelector('#container')
let jokeText = document.querySelector('.joke')
let nextbtn = document.querySelector('#nextbtn')

//on webpage load 
window.addEventListener('load',()=>{
    manupulateData()
})

//nextbtn click
nextbtn.addEventListener('click',()=>{
    manupulateData()
})


//getting chuck api
async function getData() {
    let data = await fetch('https://api.chucknorris.io/jokes/random')
    data = data.json();
    return data;

}

function manupulateData() {
    //gettign the joke data
    getData().then((joke) => {
        //console.log(joke)
        jokeText.textContent = joke.value
    })
}
