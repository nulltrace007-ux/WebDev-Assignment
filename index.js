// // function doHomework(){
// //     const p = new Promise((res,rej)=>{
// //         let done = true;
// //         setTimeout(()=>{
// //             if (done){
// //                 console.log("Homework Completed")
// //                 res("Homework is done")

// //             }else{
// //                 rej("Homework not completed")
// //             }
// //         },2000)
// //     });return p
// // }
// // function eatDinner(){
// //     const p = new Promise((res,rej)=>{

// //     }
// // }

// // function gotoPlayground(){
// //     const p new Promise((res,rej)=>{
// //         let done = true;
// //         setTimeout(() => {
// //             if done{
// //                 console.log("Went to the playground")
// //                 res("Playground time")

// //             }else{
// //                 rej("Not allowed to go!")
// //             }
            
// //         },2000);
// //     })
// //     return p
// // }

// // doHomework().then((data)=>{
// //     console.log(data)
// //     return eatdinner()
// // }).then((data)=>{
// //     console.log(data)
// //     return gotoPlayground()
// // }).then((data)=>)

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setInterval(()=>{
//             console.log("Food order")
//             res()
//         },2000)
//     })
// }

// async function orderFood() {
    
// }

const form = document.querySelector("#form")
const eventTitle = document.querySelector("#eventitle")
const eventDate = document.querySelector("#eventDate")
const category = document.querySelector("#category")
const description = document.querySelector("#description")
const eventcards = document.querySelector(".cards")
const clearAllBtn = document.querySelector("#clearAll")
const addSampleBtn = document.querySelector("#addSample")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
        <div class="deletecard">X</div>
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${cat}</p>
        <p>${desc}</p>
    `

    eventcards.appendChild(card)

    form.reset()
})


// Delete card using event delegation
eventcards.addEventListener("click", function(e){
    if(e.target.classList.contains("deletecard")){
        e.target.parentElement.remove()
    }
})


// Clear all cards
clearAllBtn.addEventListener("click", function(){
    eventcards.innerHTML = ""
})


// Add sample events
addSampleBtn.addEventListener("click", function(){

    const sampleData = [
        {title: "Tech Conference", date: "2026-03-10", cat: "conference", desc: "Big tech event"},
        {title: "React Workshop", date: "2026-04-15", cat: "workshop", desc: "Learn React basics"},
        {title: "Community Meetup", date: "2026-05-20", cat: "meetup", desc: "Networking event"}
    ]

    sampleData.forEach(function(item){

        const card = document.createElement("div")
        card.classList.add("card")

        card.innerHTML = `
            <div class="deletecard">X</div>
            <h3>${item.title}</h3>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Category:</strong> ${item.cat}</p>
            <p>${item.desc}</p>
        `

        eventcards.appendChild(card)
    })
})










