function show(){
    alert("Me");
}
function confirm(status){

    if(status){
        x = confirm("Do wanna save status?")

        if(x){
            alert('Satus Succesfully saved');
        }
    }
}

function run(){

    return "2";
}