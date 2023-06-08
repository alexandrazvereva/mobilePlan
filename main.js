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
    button.setAttribute("id", `plan-${index}`);
    button.innerHTML = "More info";
    card.append(title, calls, price, button)
    let main = document.querySelector(".main");
    main.appendChild(card);
    title.innerHTML = PLANS[index].planName;
    calls.innerHTML = PLANS[index].internet + " GB, " + PLANS[index].calls + " minutes ";
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
let button = document.querySelectorAll(".button-plan");
let modal = document.querySelector(".modal");
button.forEach(element => element.addEventListener("click", function (event) {
    createModal();
    updateModal(event.target.id);
    document.body.style.backgroundColor = "#ebf0dd";
    modal.classList.add("modal-active")
}));
function updateModal(currentPlan) {
    currentPlan = currentPlan.split("-").pop();
    console.log(currentPlan);
    document.querySelector(".info").innerHTML = PLANS[currentPlan].info;
    document.querySelector(".bonus").innerHTML = PLANS[currentPlan].bonus;
}
let buttonClose = document.querySelector(".button-close");
let isModalShown = false;
buttonClose.addEventListener("click", () => {
    document.body.style.backgroundColor = "transparent";
    modal.classList.remove("modal-active");
});




