// Cache DOM elements to avoid repeated lookups
let brandsArray = [
    "https://i.pinimg.com/564x/5b/71/0d/5b710d912e748f0df4f454b51ab5821c.jpg",
    "https://i.pinimg.com/564x/d5/f8/f5/d5f8f5ceb7ff827e93c496887adb639a.jpg",
    "https://i.pinimg.com/564x/11/12/96/111296b81bb4f177cca782d2f5c494bb.jpg",
    "https://i.pinimg.com/564x/ac/0b/6b/ac0b6b9f45cd06e92e6941659e933a06.jpg",
    "https://i.pinimg.com/564x/16/bf/94/16bf94bd2015faf64008140f002338b3.jpg",
    "https://i.pinimg.com/564x/6b/25/6d/6b256d695531d3d032ae5f4ca833598e.jpg",
    "https://i.pinimg.com/564x/8e/c5/6b/8ec56b546d552447f009cecbe5910424.jpg"
]
const navWork = document.getElementById("work");
const navStudio = document.getElementById("studio");
const navRecognition = document.getElementById("recognition");

const barIconEl = document.getElementById("barIcon");
const navbarAddressContainerEl = document.getElementById("navbarAddressContainer");

const sandleImageEl = document.getElementById("sandleImage");
const sandleParaEl = document.getElementById("sandlePara");

const hematogenixImageEl = document.getElementById("hematogenixImage");
const hematogenixParaEl = document.getElementById("hematogenixPara");

const kategoraImageEl = document.getElementById("kategoraImage");
const kategoraParaEl = document.getElementById("kategoraPara");

const altsdigitalImageEl = document.getElementById("altsdigitalImage");
const altsdigitalParaEl = document.getElementById("altsdigitalPara");

const teamImageEl = document.getElementById("teamImage");
const teamParaEl = document.getElementById("teamPara");

const individualImageEl = document.getElementById("individualImage");
const individualParaEl = document.getElementById("individualPara");

const firstBrandImageEl = document.getElementById("firstBrandImage");
const secondBrandImageEl = document.getElementById("secondBrandImage");

// Helper function to add hover effects
function addHoverEffect(navElement, hoverText, originalText) {
    navElement.addEventListener("mouseover", () => {
        navElement.textContent = hoverText;
        navElement.style.textDecoration = "underline";
        navElement.style.textUnderlineOffset = "5px";
    });

    navElement.addEventListener("mouseout", () => {
        navElement.textContent = originalText;
        navElement.style.textDecoration = "none";
    });
}

// Apply hover effects to each navigation element
addHoverEffect(navWork, "Hard", "Work");
addHoverEffect(navStudio, "Play Harder", "Studio");
addHoverEffect(navRecognition, "Yeah!", "Recognition");

// Display/hide navbar features when the bar icon is clicked
barIconEl.addEventListener("click", () => {
    barIconEl.classList.toggle("fa-xmark");
    navbarAddressContainerEl.classList.toggle("visible");
});


sandleImageEl.addEventListener("mouseover",() => {
    sandleParaEl.classList.add("sandle-block");
})

sandleImageEl.addEventListener("mouseout",() => {
    sandleParaEl.classList.remove("sandle-block");
})


hematogenixImageEl.addEventListener("mouseover",() => {
    hematogenixParaEl.classList.add("sandle-block");
})

hematogenixImageEl.addEventListener("mouseout",() => {
    hematogenixParaEl.classList.remove("sandle-block");
})



kategoraImageEl.addEventListener("mouseover",() => {
    kategoraParaEl.classList.add("sandle-block");
})

kategoraImageEl.addEventListener("mouseout",() => {
    kategoraParaEl.classList.remove("sandle-block");
})


altsdigitalImageEl.addEventListener("mouseover",() => {
    altsdigitalParaEl.classList.add("sandle-block");
})

altsdigitalImageEl.addEventListener("mouseout",() => {
    altsdigitalParaEl.classList.remove("sandle-block");
})



teamImageEl.addEventListener("mouseover",() => {
    teamParaEl.classList.add("sandle-block");
})

teamImageEl.addEventListener("mouseout",() => {
    teamParaEl.classList.remove("sandle-block");
})



individualImageEl.addEventListener("mouseover",() => {
    individualParaEl.classList.add("sandle-block");
})

individualImageEl.addEventListener("mouseout",() => {
    individualParaEl.classList.remove("sandle-block");
})

setInterval(() => {
  const firstIndex = Math.floor(Math.random() * brandsArray.length);
  const secondIndex = Math.floor(Math.random() * brandsArray.length);

  firstBrandImageEl.src = brandsArray[firstIndex];
  secondBrandImageEl.src = brandsArray[secondIndex];
},1500)