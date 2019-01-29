
// business logic for address book---------
function AddressBook(){
  this.contacts = []
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact)
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact=function(id){
  for (i=0; i<this.contacts.length; i++){
    if (this.contacts[i]){
      if ((this.contacts[i].id)== id) {
        return this.contacts[i]
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id){
  for (i=0; i<this.contacts.length; i++){
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}



// business logic for contacts-------
function Contact(firstName, lastName, phoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " "+ this.lastName;
}



$(document).ready(function(){

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();

    var contact = new Contact(firstName, lastName, phoneNumber);

// '<li id="test">' + Object.values(contact) + "</li>"
    console.log(Object.values(contact));

    $("#info").append(`<li id="${contact.phoneNumber}">${contact.firstName} </li>`
);
  });

  $("#info").click(function(x) {
    console.log(x.target.id)
    $(this).children("li")
  });


});
