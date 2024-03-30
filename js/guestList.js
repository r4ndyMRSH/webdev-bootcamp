function inList(list, name) {
  if (list.includes(name)) {
    return "You are in the list! Please, come in :)";
  } else {
    return "You are not in the list! GET OUT!!!";
  }
}
var guestList = ["Angela", "Jack", "Pan", "James", "Lara", "Jason"];
console.log(inList(guestList, "Jack"));
console.log(inList(guestList, "Bob"));