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
    button.setAttribute("id", index);

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
function createModal() {
    let modal = document.querySelector(".modal");


    let info = document.createElement("p");
    info.classList.add("info");
    let bonus = document.createElement("p");
    bonus.classList.add("bonus");
    modal.append(info, bonus);
    document.querySelector(".main").appendChild(modal);

};

//
//PLANS.forEach((element, index) => {
//let window = document.createElement("div");
// window.classList.add("modal");
//  let info = document.querySelector("#info");
//info.classList.add("info");
//let info=document.createElement("p");
//let bonus = document.querySelector("#bonus");
//bonus.classList.add("bonus")

//bonus.innerHTML = PLANS[0].bonus;
//info.innerHTML = PLANS[0].info;

//})





let button = document.querySelectorAll(".button-plan");
//let closeButton=document.querySelectorAll(".button_modal");
let modal = document.querySelector(".modal");




button.forEach(element => element.addEventListener("click", function (event) {
    // console.log(event.target.id)
    createModal();
    updateModal(event.target.id); //kuda najal

    document.body.style.backgroundColor = "#ebf0dd";

    modal.classList.add("modal-active")
}));

function updateModal(currentPlan) {


    document.querySelector(".info").innerHTML = PLANS[currentPlan].info;
    document.querySelector(".bonus").innerHTML = PLANS[currentPlan].bonus;
}

let buttonClose = document.querySelector(".button-close");
//buttonClose.forEach(element => element.addEventListener("click", function () {
//console.log("drfghj")

// modal.classList.remove("modal-active")
//}));

let isModalShown = false;

buttonClose.addEventListener("click", () => {


    document.body.style.backgroundColor = "transparent";
    modal.classList.remove("modal-active");

});




