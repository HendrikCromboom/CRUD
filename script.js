var thisForm = {};
function getId(id) { return document.getElementById(id); }
function getValue(id) { return getId(id).value; }
function formData(id) { return thisForm[id] = getValue(id); }
function formSubmit() {
    pullFormData();
    console.log(thisForm);
}
function pullFormData() {
    formData("bookTitle");
    formData("bookAuthor");
    formData("bookRead");
    formData("bookStatus");
}
function pushFormToTable() {
    var table = getId("outputTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow;
}
