var thisForm = {
    bookTitle: "",
    bookAuthor: "",
    bookRead: "",
    bookStatus: ""
};
function getId(id) { return document.getElementById(id); }
function getValue(id) { return getId(id).value; }
function formData(id) { return thisForm[id] = getValue(id); }
function formSubmit() {
    pullFormData();
    console.log(thisForm);
    pushFormToTable();
}
function pullFormData() {
    formData("bookTitle");
    formData("bookAuthor");
    formData("bookRead");
    formData("bookStatus");
}
function pushFormToTable() {
    var table = getId("outputTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = thisForm.bookTitle;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = thisForm.bookAuthor;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = thisForm.bookRead;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = thisForm.bookStatus;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = "<a onClick=\"onEdit(this)\">Edit</a>\n                       <a onClick=\"onDelete(this)\">Delete</a>";
}
