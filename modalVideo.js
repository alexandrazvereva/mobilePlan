const video = document.querySelector(".video");
const video_two = document.querySelector(".video_two");
const video_three = document.querySelector(".video_three");
const modal = document.querySelector(".modal");
const modal_two = document.querySelector(".modal_two");
const modal_three = document.querySelector(".modal_three");
const videoPlanOne = document.querySelector(".plan_one");
const videoPlanTwo = document.querySelector(".plan_two");
const videoPlanThree = document.querySelector(".plan_three");


videoPlanOne.addEventListener("mousemove", () => {
    // modal.classList.add("modal-active");
    modal.classList.toggle("modal-active");

});
videoPlanTwo.addEventListener("mousemove", () => {
    // modal.classList.add("modal-active");
    modal_two.classList.toggle("modal_two-active");

});
videoPlanThree.addEventListener("mousemove", () => {
    // modal.classList.add("modal-active");
    modal_three.classList.toggle("modal_three-active");

});

//mouseover