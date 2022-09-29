let colorSeed = document.getElementById("seed").value.slice(1);
let colorScheme = document.getElementById("scheme").value;

function fetchColor(seed, scheme){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&format=json&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ""
            const colorImage = data.image.bare;
        
            data.colors.map(color => {
                colorHtml += 
                    `<div class="color-div">
                        <div class="color-svg" style="background-color: ${color.hex.value};"></div>
                        <p class="color-hex">${color.hex.value}</p>
                    </div>
                    ` 
            }).join("");

        
            document.querySelector(".color-container").innerHTML = colorHtml;
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
