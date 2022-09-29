let colorSeed = document.getElementById("seed").value.slice(1);
let colorScheme = document.getElementById("scheme").value;
const container = document.querySelector(".color-container");
const copyNotice = document.querySelector(".copy-notice");

function fetchColor(seed, scheme){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&format=json&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ""
            const colorImage = data.image.bare;
        
            data.colors.map(color => {
                colorHtml += 
                    `<div class="color-div scale">
                        <div class="color-svg" style="background-color: ${color.hex.value};"></div>
                        <p class="color-hex">${color.hex.value}</p>
                    </div>
                    ` 
            }).join("");

        
            container.innerHTML = colorHtml;
        })
}


document.forms["form"].addEventListener("submit", (e)=>{
    e.preventDefault();

    colorSeed = document.getElementById("seed").value.slice(1);
    colorScheme = document.getElementById("scheme")
        .options[scheme.selectedIndex]
        .text.toLowerCase();


    fetchColor(colorSeed, colorScheme);
});

fetchColor(colorSeed, colorScheme);


container.addEventListener("click", (e)=>{
    if (e.target.classList.contains("color-hex")){
        let hex = e.target;
        navigator.clipboard.writeText(hex.textContent)
        
        copyNotice.textContent = `${hex.textContent} copied to clipboard`;
        copyNotice.classList.add("active");
        hex.classList.add("scale")

        setTimeout(() => {
            copyNotice.textContent = "Click on the hex value to copy to clipboard";
            copyNotice.classList.remove("active")
            hex.classList.remove("scale")
        }, 2000);
    }
})