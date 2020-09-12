function getId(id){ return document.getElementById(id)}
function returnValue(id){ return (<HTMLInputElement>getId(id)).value}
function resetValue(id){(<HTMLInputElement>getId(id)).value = ""}
function formData(id){ return thisForm[id] = returnValue(id)}
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
function formSubmit(){  // Gets called by HTML DOM inline, seems to be the only way to execute a form without refreshing...
    pullFormData();
    console.log(thisForm);
    pushFormToTable()
    resetForm()

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
    let col1 = newRow.insertCell(0);
    col1.innerHTML = thisForm.bookTitle;
    let col2 = newRow.insertCell(1);
    col2.innerHTML = thisForm.bookAuthor;
    let col3 = newRow.insertCell(2);
    col3.innerHTML = thisForm.bookRead;
    let col4 = newRow.insertCell(3);
    col4.innerHTML = thisForm.bookStatus;
    let col5 = newRow.insertCell(4);
    col5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
    resetValue("bookTitle")
    resetValue("bookAuthor")
    resetValue("bookRead")
    resetValue("bookStatus")
}
