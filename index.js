const arr = [
    {
        name: "mahdi",
        age: 25,
    }
    ,
    {
        name: "lahdi",
        age: 27,
    }
    ,
    {
        name: "dahdi",
        age: 22,
    }
    ,
    {
        name: "mahdi",
        age: 30,
    }
]


const filter = arr.filter(a => a?.age < 26);
console.log(filter);
const app = document.getElementById('app');
filter.map(data => {
    console.log(data, 'map');
    const show = document.createElement('div');

    show.innerHTML = `<p> ${data.name} </p>
    <p> ${data.age} </p>
    
    
    `
app.appendChild(show)
})