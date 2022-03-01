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
    result += current.value + "\n";
    current = current.next;
  };
  document.getElementById("getList").value = result;
}

list = new LinkedList();
list.append("Esteban");
list.append("Tania");
list.append("Santiago");
list.print();
var counter = list.length();

function obtenerDatos(){
  var text = document.getElementById("data").value;
  list.append(text);
  console.log(list.length());
  list.print();

}

function agregarListaDpz(){
   var text = document.getElementById("data").value;
   select = document.getElementById("Desplegable");
   var opt = document.createElement('option');
   opt.value = text;
     opt.innerHTML = text;
     select.appendChild(opt);
     document.getElementById("data").value = " ";
}

function eliminarDeListaDpz(){
   select = document.getElementById("Desplegable");
   optn = select.value;
   for (var i=0; i<select.length; i++) {
      if (select.options[i].value == optn)
         select.remove(i);
    }
}

function Funciono(id){
  var id = document.getElementById(id);
  var selected = id.value;
  list.removeNode(selected);
  list.print();
  console.log(selected);
  escribe = document.getElementById("texto");
  escribe.innerHTML = selected;
}


console.log(list.findNode("Esteban"));
console.log(list.length());

