const NameArray = [..."Nishank kushwaha"];//16
const NameDisplay = document.getElementById("name");

const CollegeArray = [..."IIT(BHU) Varanasi"];//17
const CollegeDisplay = document.getElementById("clg");

const BranchArray = [..."Electrical Engineering"];//22
const BranchDisplay = document.getElementById("branch");

const HobbyArray = [..."Coding"];//6
const HobbyDisplay = document.getElementById("hobby");

const One = document.querySelector(".one");
const Two = document.querySelector(".two");
const Three = document.querySelector(".three");
const Four = document.querySelector(".four");

const typeEffect = (ind,arr) => {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            resolve(arr[ind]);
            
        }, 150);

    });
}

const DisplayFunction = async (Array,Display) => {

    Display.textContent = "@ ";
    
    for (let i = 0; i < Array.length; i++) { 
        let response = await typeEffect(i,Array);
        Display.textContent = Display.textContent + response;
        // console.log(response);
    }

    setTimeout(() => {
        Display.textContent = " ";
    }, 1000);

}

document.getElementById("btn_name").addEventListener("click",()=>{
    NameDisplay.classList.add("Animate");
    One.classList.remove("ScaleAni");
    
    DisplayFunction(NameArray,NameDisplay);

    setTimeout(() => {
        NameDisplay.classList.remove("Animate");
        One.classList.add("ScaleAni");
    }, 3490);
})

document.getElementById("btn_clg").addEventListener("click",()=>{
    CollegeDisplay.classList.add("Animate");
    Two.classList.remove("ScaleAni");
    
    DisplayFunction(CollegeArray,CollegeDisplay);

    setTimeout(() => {
        CollegeDisplay.classList.remove("Animate");
        Two.classList.add("ScaleAni");
    }, 3610);
})

document.getElementById("btn_branch").addEventListener("click",()=>{
    BranchDisplay.classList.add("Animate");
    Three.classList.remove("ScaleAni");
    

    DisplayFunction(BranchArray,BranchDisplay);

    setTimeout(() => {
        BranchDisplay.classList.remove("Animate");
        Three.classList.add("ScaleAni");
    }, 4440);
})

document.getElementById("btn_hobby").addEventListener("click",()=>{
    HobbyDisplay.classList.add("Animate");
    Four.classList.remove("ScaleAni");
    

    DisplayFunction(HobbyArray,HobbyDisplay);

    setTimeout(() => {
        HobbyDisplay.classList.remove("Animate");
        Four.classList.add("ScaleAni");
    }, 2000);
})

