const freelancers = [
    { name: "Alice", price: 30, job: "writer" },
    { name: "Bob", price: 50, job: "teacher" }
];

const additionalWorkers = [
    {name: "Carol", price: 70, job: "programmer"},
    {name: "Jessica", price: 50, job: "songwriter"},
    {name: "Joshua", price: 100, job: "idol"},
    {name: "Riley", price: 30, job: "writer"},
    {name: "Brandon", price: 40, job: "MUA"}
];
let maxWorkers = 10;
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
    console.log(freelanceElements);
}

function addWorker() {
    const selectedWorker = additionalWorkers[Math.floor(Math.random() * freelancers.length)];
freelancers.push(selectedWorker);
if (freelancers.length >= maxWorkers) {
    clearInterval(addWorkerIntervalId)
  };
render(); 
}
