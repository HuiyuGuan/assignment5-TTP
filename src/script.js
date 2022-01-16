
let cell = document.getElementById("cell")
let width = 1
let height = 1

function addRows(){
    let row = document.createElement('tr')
    row.classList.add("row")
    cell.appendChild(row)
    for(let i = 0; i < width; i++){
        let column = document.createElement("td")
        column.classList.add("column")
        row.appendChild(column)
    }
    height++
}
function addColumns(){
    let row = document.getElementsByClassName("row")
    let tr = Array.from(row)
    for (let i = 0; i < tr.length; i++) {
        let column = document.createElement("td")
        column.classList.add("column")
        tr[i].appendChild(column)
    }
    width++
}
function removeRows(){
    let row = document.getElementsByClassName("row")
    let tr = Array.from(row)
        if(tr.length > 1){
            tr[tr.length - 1].remove()
        }
    height--
}
function removeColumns(){
    let row = document.getElementsByClassName("row")
    let tr = Array.from(row)
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild)
    }
    width--
}
function fillUncolored(){
    let color = document.getElementById("color")
    let column = document.getElementsByClassName("column")
    let td = Array.from(column)
    for(let t of td){
        if(t.style.backgroundColor =="white"){
            t.style.backgroundColor = color.value
        }
    }
}

function fillAll(){
    let color = document.getElementById("color")
    let column = document.getElementsByClassName("column")
    let td = Array.from(column)
    for(let t of td){
            t.style.backgroundColor = color.value
    }
}

function clearColor(){
    let column = document.getElementsByClassName("column")
    let td = Array.from(column)
    for(let t of td){
            t.style.backgroundColor = "white"
    }
}

let colored = false
let color = document.getElementById("color")
    cell.onclick = function(event){
        event.target.style.backgroundColor = color.value
    }
    cell.onmousedown = function(){
        colored = true
    }
    cell.onmouseup = function(){
        colored = false
    }
    cell.onmousemove = function(event){
        if(colored){
            event.target.style.backgroundColor = color.value 
        }
    }