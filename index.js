
async function getInfo(){
    let dataRaw = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stargazers_count&order=desc&score=1');
    let data = await dataRaw.json();
    return data;
}

async function gotData(){
    let test = await getInfo();
    console.log(test.items)
    let output = test.items.slice(0,3);
    let outputHTML = document.getElementById('output')

    output.forEach( (value)=>{

        outputHTML.innerHTML +=
            `<div class="container">
<div class="box">
<img src="${value.owner.avatar_url}">
<h3>ID: ${value.id}</h3>
<p>${value.description}</p>
<p> Stars count: ${value.stargazers_count}</p>
<p>${value.url}</p>
</div>
</div>`
    })
}

gotData();