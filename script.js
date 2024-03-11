var popupoverlay=document.querySelector(".popupoverlay")
console.log(popupoverlay)

var popupbox=document.querySelector(".popbox")
console.log(popupbox)


var addpopupbutton=document.getElementById("pluss")
console.log(addpopupbutton)

addpopupbutton.addEventListener('click',function(){
    popupoverlay.style.display='block'
    popupbox.style.display='block'
})


var cancelpopup=document.getElementById("cancelbook")
console.log(cancelpopup)

cancelpopup.addEventListener(
    "click",
    function(){
        event.preventDefault()
        popupbox.style.display="none"
        popupoverlay.style.display="none"
    }
)


var container=document.querySelector(".container")
console.log(container)

var addbook=document.getElementById('addbook')
console.log(addbook)

var booktitleinput=document.getElementById("booktitle")
console.log(booktitleinput)

var bookauthour=document.getElementById("bookowner")
console.log(bookauthour)

var bookdescription=document.getElementById("bookdescription")
console.log(bookdescription)


addbook.addEventListener("click",
function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`
    <h1>${booktitleinput.value}</h1>
    <h5>${bookauthour.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    
    `





    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
    

})

function deletebook(event){
    event.target.parentElement.remove()
}