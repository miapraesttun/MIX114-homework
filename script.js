
//oppgave 1 a
function splitLines(text){
    return text.split("\n").filter(line=>line!="")
}

let result=splitLines("A\nB\nC");
console.log(result)


//oppgave 1c
function pairSums(numbers){
    let list=document.createElement("ul");

    for (let i=0; i<numbers.length - 1; i++){
        let sum= numbers[i]+numbers[i+1];

        let item=document.createElement("li");
        item.textContent=sum;

        list.appendChild(item);
    }
}

pairSums([2,3,4,2]);