const video = document.querySelector(".video");
const video_two = document.querySelector(".video_two");
const video_three = document.querySelector(".video_three");
const modal = document.querySelector(".modal");
const modal_two = document.querySelector(".modal_two");
const modal_three = document.querySelector(".modal_three");
const videoPlanOne = document.querySelector(".plan_one");
const videoPlanTwo = document.querySelector(".plan_two");
const videoPlanThree = document.querySelector(".plan_three");


//videoPlanOne.addEventListener("click", () => { //"mousemove"
// modal.classList.add("modal-active");
// modal.classList.toggle("modal-active");

//});
//videoPlanTwo.addEventListener("click", () => {
// modal.classList.add("modal-active");
//modal_two.classList.toggle("modal_two-active");

//});
//videoPlanThree.addEventListener("click", () => {
// modal.classList.add("modal-active");
// modal_three.classList.toggle("modal_three-active");

//});


const PLANS = [
    {
        planName: "Simple",
        internet: 10,
        calls: 100,
        price: 10,
        info: "Aditional information for simple plan",
        bonus: "Bonuses: None"
    },
    {
        planName: "Basic",
        internet: 20,
        calls: 200,
        price: 15,
        info: "Aditional information for basic plan",
        bonus: "Bonuses: Unlimited messenger traffic"
    },
    {
        planName: "Business",
        internet: 50,
        calls: " no limit",
        price: 30,
        info: "Aditional information for business plan",
        bonus: "Bonuses: Unlimited messenger traffic + 100 sms"
    }
];

PLANS.forEach((element, index) => {
    let card = document.createElement("div");
    card.classList.add("rectangle");
    let title = document.createElement("h2");
    title.classList.add("title");
    let calls = document.createElement("p");
    calls.classList.add("calls");
    let price = document.createElement("p");
    price.classList.add("price");
    let button = document.createElement("button");
    button.classList.add("button-plan");
    button.innerHTML = "More info";
    card.append(title, calls, price, button)

    let main = document.querySelector(".main");
    main.appendChild(card);
    //let title = document.querySelector("#title")
    title.innerHTML = PLANS[index].planName;
    //let calls = document.querySelector("#calls");
    calls.innerHTML = PLANS[index].internet + " GB, " + PLANS[index].calls + " minutes ";
    //let price = document.querySelector("#price")
    price.innerHTML = "$" + PLANS[index].price;

}
)

let button=document.querySelectorAll(".button-plan");

button.forEach(element=>element.addEventListener("click", function (){
    console.log("drfghj")
}
));

let info=document.querySelector("#info")
info.innerHTML=PLANS[0].info;
let bonus=document.querySelector("#bonus")
bonus.innerHTML=PLANS[0].bonus;






