
var expiryMonth[]

function validatePersForm() {
    
    let fname = document.forms["persForm"]["firstName"].value;
    if (fname === "") {
        alert(" First name should not be blank");
        return false;
    }
    
    let sname = document.forms["persForm"]["surname"].value;
    if (sname === "") {
        alert(" surname should not be blank");
        return false;
    }
    
    let dob = document.forms["persForm"]["dob"].value;
    if (dobValidate(dob) == false) return false;

    const gender = document.forms["persForm"]["gender"].value;
    if (gender == "" || gender == "Select"){
        alert("Please select Gender");
        return false;
    }
}

function dobValidate(dob){
    
    if (dob == ""){
        alert("Date of Birth should not be blank");
        return false;
    }

    let today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (day<10){
        day = '0'+day;
    }
    if (month<10){
        month = '0'+month;
    }
    today = year + '-' + month + '-' + day;
    if (dob > today){
        alert("Date of Birth should not be future");
        return false;
    }
}

function validateAddrForm() {
    
    let adLine1 = document.forms["addrForm"]["addLine1"].value;
    if (adLine1 === "") {
        alert(" address Line1 should not be blank");
        return false;
    }

    let radio = document.forms["addrForm"]["metro"].value;
    if (radio === "") {
        alert("Select Metro or Non Metro");
        return false;
    }
}

function validateContForm() {

}

function validateAccForm(){

}