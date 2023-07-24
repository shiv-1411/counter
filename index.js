//document.getElementById("count").innerText = 5
let countEl=document.getElementById("counter")
console.log(countEl)
let count=0

function increment(){
    count+=1
    countEl.innerText=count
    
}
function save(){
    console.log(count)
}