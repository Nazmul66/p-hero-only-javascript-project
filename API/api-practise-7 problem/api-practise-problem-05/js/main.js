

fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => dataFile(data));

const dataFile = files =>{
    console.log(files);

    const container = document.getElementById("col-half");
    container.innerHTML = `
    <h3 class="text-center text-[#5ac59b] mb-8">ADVICE: #${files.slip.id}</h3>
    <p class="text-[#c4d2dc] text-4xl text-center">"${files.slip.advice}"</p>
    `
}