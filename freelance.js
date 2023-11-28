const freelancers = [
    { name: "Alice", price: 30, job: "writer" },
    { name: "Bob", price: 50, job: "teacher" }
];

for(let i=0; i < freelancers.length; i++){
    console.log(freelancers[i]);
    
}

const additionalWorkers = [
    { name: "Carol", price: 70, job: "programmer" },
    { name: "Jessica", price: 50, job: "songwriter" },
    { name: "Joshua", price: 100, job: "idol" },
    { name: "Riley", price: 30, job: "writer" },
    { name: "Brandon", price: 40, job: "MUA" }
];

let maxWorkers = 7;
const addWorkerIntervalId = setInterval(addWorker, 3000);

render()


function render() {
    
    const freelanceContainer = document.querySelector("#workers");
    const freelanceElements = freelancers.map((person) => {
        const element = document.createElement("li");
        element.classList.add(person.name, person.job, person.price);
        return element;
    });
    freelanceContainer.replaceChildren(...freelanceElements);
}

let text = document.getElementById("workers").textContent;

function avgPrice() {
   let total = (freelancers.price += additionalWorkers.price); 
   for(let i=0; i < total.length; i++){
    avg = (total / total[i]); 
   }
    return `The average starting price is: ${avg}.`
}

function addWorker() {
    const selectedWorker = additionalWorkers[Math.floor(Math.random() * freelancers.length)];
    freelancers.push(selectedWorker);
    if (freelancers.length >= maxWorkers) {
        clearInterval(addWorkerIntervalId)
    };
    render();
}

