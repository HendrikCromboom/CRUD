let thisForm = {};
function getId(id){ return document.getElementById(id)}
function getValue(id){ return (<HTMLInputElement>getId(id)).value}
function formData(id){ return thisForm[id] = getValue(id)}


function formSubmit(){
    pullFormData();
    console.log(thisForm);
}
function pullFormData(){
    formData("bookTitle");
    formData("bookAuthor");
    formData("bookRead");
    formData("bookStatus");
}
function pushFormToTable(){
    let table = getId("outputTable").getElementsByTagName("tbody")[0];
    let newRow = (<HTMLTableSectionElement>table).insertRow
}