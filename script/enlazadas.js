console.log("Script Lista")
function Node (value) {
  this.value = value
  this.next = null
}

function LinkedList() {
  this.head = null
}

LinkedList.prototype.append = function(value, current = this.head){
  if(this.head === null){
    return this.head = new Node(value)
  }
  if(current.next === null){
    return current.next = new Node(value)
  }
  this.append(value, current.next)
}

LinkedList.prototype.removeNode = function (value, current = this.head) {
  if(this.head === null){ // no head
    return false
  }

  if (this.head.value === value){
    return this.head = this.head.next
  }

  if(current.next !== null){
    if(current.next.value === value){
      return current.next = current.next.next
    }
    this.removeNode(value, current.next)
  }
  return false // no match found
}

LinkedList.prototype.findNode = function (value, current = this.head){
  if(this.head === null) {
    return false
  }

  if (current !== null) {
    if (current.value === value){
      return true
    } else {
      return this.findNode(value, current.next)
    }
  }
  return false
}

LinkedList.prototype.peekNode = function (value) {
  if(this.head === null) {
    return false
  }
  return this.head
}


LinkedList.prototype.length = function (current = this.head, acum = 1) {
  if(this.head === null){
    return 0
  }
  if (current.next !== null){
    return this.length(current.next, acum = acum + 1)
  }
  return acum
}
LinkedList.prototype.print = function(){
  if (!this.length) {
    return null;
  };
  let current =this.head;
  let result = "";
  while(current){
    result = current.value;
    current = current.next;
  }
  bloque = document.getElementById("bloque");
  var element = document.createElement('p');
  element.setAttribute("id", "text-"+ this.length());
  element.setAttribute("onclick", "EliminarDato(id)");
  element.setAttribute("class", "lead");
  element.innerHTML = result;
  bloque.appendChild(element);
};

list = new LinkedList();
list.append("Esteban");
list.print();

function obtenerDatos(){
  var text = document.getElementById("data").value;
  list.append(text);
  console.log(list.length());
  list.print();

}

function EliminarDato(id){
  console.log(id);
  var item = document.getElementById(id);
  item.style.display = "none";
}
console.log(list.findNode("Esteban"));
console.log(list.length());

