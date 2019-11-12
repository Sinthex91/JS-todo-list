var toDos = ["To do 1", " To do 2 ", " To do 3 "];

// toDos.push(" To do 4 push ");
// toDos[1] = " To do 2 changed ";
// toDos.splice(2, 1);
// document.write("My Todos: " + toDos);

// var name = prompt("Dein Name bitte: ", "");
// function sayHiTo(person) {
//   document.write("<br><h1>Guten Tag " + person + " und willkommen!");
// }
// sayHiTo(name);

function displayToDos() {
  document.write("<br><h2>My Todos: " + toDos + "</h2>");
}
displayToDos();

function addToDos(todo) {
  toDos.push(todo);
  displayToDos();
}
addToDos(" Test ");

function changeToDos(pos, newValue) {
  toDos[pos] = newValue;
  displayToDos();
}
changeToDos(0, " My changed to do 1 ");

function deleteToDo(pos) {
  toDos.splice(pos, 1);
  displayToDos();
}
deleteToDo(1);
deleteToDo(0);
