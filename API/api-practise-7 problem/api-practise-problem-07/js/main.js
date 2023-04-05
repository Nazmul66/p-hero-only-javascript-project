

fetch('https://api.github.com/users')
.then(res => res.json())
.then(data => dataFile(data));

const dataFile = files =>{
   const contain = document.getElementById("contain"); 
   for(let file of files){
    console.log(file.login);

    const createDiv = document.createElement("div");
    createDiv.classList.add("border-4","gap-5","flex","justify-between","border-[#9900ff]","p-5","bg-[#1f2a48]");
    createDiv.innerHTML = `
        <div class="img w-[20%]">
           <img src="" alt="">
        </div>

        <div class="w-[80%]">
            <div class="name-dates flex justify-between items-center">
            <h1 class="text-3xl font-bold text-white"></h1>
            <p class="text-lg font-medium text-[#aaafba]">11-22-2018</p>
            </div>
            <span class="block text-[#0860c5] font-medium mb-5">name</span>
            <span class="block text-[#aaafba] font-medium mb-5">This profile has no bio</span>
            <div class="px-7 py-4 rounded-[12px] flex justify-between items-center bg-[#141c2f]">
            <div class="repos">
                <h3 class="text-white font-medium">repos</h3>
                <p class="text-white font-medium">20</p>
            </div>
            <div class="repos">
                <h3 class="text-white font-medium">Followers</h3>
                <p class="text-white font-medium">20</p>
            </div>
            <div class="repos">
                <h3 class="text-white font-medium">Following</h3>
                <p class="text-white font-medium">20</p>
            </div>
            </div>

            <div class="grid grid-cols-2 gap-5 mt-5 items-center">
            <div class="flex items-center">
                <i class="fa-solid fa-location-dot text-white mr-3"></i>
                <p class="text-[#aaafba] font-medium">location</p>
            </div>
            <div class="flex items-center">
                <i class="fa-brands fa-twitter text-white mr-3"></i>
                <p class="text-[#aaafba] font-medium">location</p>
            </div>
            <div class="flex items-center">
                <i class="fa-solid fa-link text-white mr-3"></i>
                <p class="text-[#aaafba] font-medium">location</p>
            </div>
            <div class="flex items-center">
                <i class="fa-solid fa-house text-white mr-3"></i>
                <p class="text-[#aaafba] font-medium">github</p>
            </div>
            </div>
        </div>
        `;
        contain.appendChild(createDiv);
   }
}