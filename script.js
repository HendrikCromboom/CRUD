var thisForm = {};
function getId(id) { return document.getElementById(id); }
function getValue(id) { return getId(id).value; }
function formData(id) { thisForm[id] = getValue(id); }
function formSubmit() {
    pullFormData();
}
function pullFormData() {
    formData("bookTitle");
    formData("bookAuthor");
    formData("bookRead");
    formData("bookStatus");
    console.log(thisForm);
}
