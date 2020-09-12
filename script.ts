let thisForm:{
    bookTitle: string,
    bookAuthor: string,
    bookRead: string,
    bookStatus: string,
} = {
    bookTitle: "",
    bookAuthor: "",
    bookRead: "",
    bookStatus:"",
};

function getId(id){ return document.getElementById(id)}
function getValue(id){ return (<HTMLInputElement>getId(id)).value}
function formData(id){ return thisForm[id] = getValue(id)}


function formSubmit(){
    pullFormData();
    console.log(thisForm);
    pushFormToTable()

}
function pullFormData(){
    formData("bookTitle");
    formData("bookAuthor");
    formData("bookRead");
    formData("bookStatus");
}
function pushFormToTable(){
    let table = getId("outputTable").getElementsByTagName("tbody")[0];
    let newRow = (<HTMLTableSectionElement>table).insertRow()
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = thisForm.bookTitle;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = thisForm.bookAuthor;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = thisForm.bookRead;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = thisForm.bookStatus;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
