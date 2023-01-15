const btnEl = document.querySelector(".btn")
const closeIconEl =document.querySelector(".close-icon")
const vedioContainerEl = document.querySelector(".vedio-container")
const vedioEl = document.querySelector("video")

btnEl.addEventListener("click" , ()=>{
    vedioContainerEl.classList.remove("active")
})

closeIconEl.addEventListener("click" , ()=>{
    vedioContainerEl.classList.add("active")
vedioEl.pause()
vedioEl.currentTime = 0
})