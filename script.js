
//oppgave 1 a
function splitLines(text){
    return text.split("\n").filter(line=>line!="")
}

let result=splitLines("A\nB\nC");
console.log(result)

//1b
function numberList(liste){
    return liste.map(tekst => Number(tekst));
}

let resultat = numberList(["1.2","-3.4","5.6"]);
console.log(resultat);



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


//2

//2

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        return;
    }

    const list = document.getElementById("taskList");

    list.innerHTML += `
        <li>
            <input type="checkbox" onchange="toggleTask(this)">
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        </li>
    `;

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTask(checkbox) {
    const text = checkbox.nextElementSibling;

    if (checkbox.checked) {
        text.style.textDecoration = "line-through";
    } else {
        text.style.textDecoration = "none";
    }
}