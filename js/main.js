let btnDiscover=document.getElementById("btnDiscover")
let randomTheme=document.getElementById("randomTheme")

let btnCompleted1=document.getElementById("btnCompleted1")




btnCompleted1.addEventListener("click",function(e){
   
    let  taskTitle1=getInnerText("taskTitle1")
    let  totalTask=parseInt(getInnerText("totalTask"))
    let  ongoingTask=parseInt(getInnerText("ongoingTask"))

    setInnerText(totalTask,totalTask-1)
    setInnerText(ongoingTask,ongoingTask+1)

    alert("Board updated Successfully");


})


btnDiscover.addEventListener("click",function(e){
    window.location.href="./blog.html"
})
randomTheme.addEventListener("click",function(e){
   document.getElementById("mainBody").style.backgroundColor =  randomColor()
})


function randomColor(){
    let r=Math.floor(Math.random() *16)+230;
    let g=Math.floor(Math.random() *16)+230;
    let b=Math.floor(Math.random() *16)+230;

    return `rgb(${r}, ${g}, ${b})`
}


function getInnerText(id){
    let text=document.getElementById(id).innerText;

    return text;
}
function setInnerText(id,text){
    
    document.getElementById(id).innerText=text;
}