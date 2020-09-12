function getId(id) { return document.getElementById(id); }
function returnValue(id) { return getId(id).value; }
function resetValue(id) { getId(id).value = ""; }
function formData(id) { return thisForm[id] = returnValue(id); }
var thisForm = {
    bookTitle: "",
    bookAuthor: "",
    bookRead: "",
    bookStatus: ""
};
function formSubmit() {
    pullFormData();
    console.log(thisForm);
    pushFormToTable();
    resetForm();
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
    var col1 = newRow.insertCell(0);
    col1.innerHTML = thisForm.bookTitle;
    var col2 = newRow.insertCell(1);
    col2.innerHTML = thisForm.bookAuthor;
    var col3 = newRow.insertCell(2);
    col3.innerHTML = thisForm.bookRead;
    var col4 = newRow.insertCell(3);
    col4.innerHTML = thisForm.bookStatus;
    var col5 = newRow.insertCell(4);
    col5.innerHTML = "<a onClick=\"onEdit(this)\">Edit</a>\n                       <a onClick=\"onDelete(this)\">Delete</a>";
}
function resetForm() {
    resetValue("bookTitle");
    resetValue("bookAuthor");
    resetValue("bookRead");
    resetValue("bookStatus");
}
