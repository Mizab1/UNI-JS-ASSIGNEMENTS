let a = 123; //global

function say(){
    let b = "ur mum"; // local to say()
    

    if(true){
        var c = "should"; // global
    }
}

console.log(a);
console.log(b);
console.log(c);