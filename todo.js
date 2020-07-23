
var list=document.getElementById('list')

function add(){
    var todo_item=document.getElementById("todo-item")
   
    
    
    var li=document.createElement('li')
    li.style.marginLeft="20px";
    li.style.color='white';
    var liText=document.createTextNode(todo_item.value)    
    li.appendChild(liText)
    list.appendChild(li) 
    
    
    
    // Create deletebtn

    var delbtn=document.createElement('button')
    var delText=document.createTextNode("Delete")
    delbtn.setAttribute('class','btn')
    delbtn.setAttribute('onclick','deleteItem(this)')    
    delbtn.appendChild(delText)    
    
    // create edit
    var editBtn=document.createElement('button')
    var editText=document.createTextNode('Edit')
    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.appendChild(editText)
    
    
    li.appendChild(delbtn)
    li.appendChild(editBtn)
    
    
    todo_item.value="";

}

function deleteItem(e){
e.parentNode.remove()
    console.log(e)
}

function editItem(e){
var val=prompt("enetr",e.parentNode.firstChild.nodeValue)
e.parentNode.firstChild.nodeValue=val;    

}


function DEL(){
    list.innerHTML=""
}
