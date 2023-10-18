const nameInput = document.querySelector(".nameInput");
const dateInput = document.querySelector(".dateInput");
const amountInput = document.querySelector(".amountInput");
const addButton = document.querySelector(".addButton");
const deleteButton = document.querySelector(".deleteButton");
const tbody = document.querySelector(".tableBody");
const req = document.querySelector(".requirementLabel");
addButton.addEventListener("click", getExpense);

function getExpense(){

    //retrieve data
    let name = nameInput.value;
    let date = dateInput.value;
    let amount = amountInput.value;

    //check if there is data 
    if (name === '' || date ==='' || amount === ''){
        
        req.style.display = "block";
        return;
    }
    req.style.display = "none";
    //create a new row 
    const newRow = document.createElement('tr');
    newRow.classList.add('tableRow');

    //created cell1
    const cell1 = document.createElement('td');
    cell1.classList.add('checkDelete');
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell1.appendChild(checkbox);

    //created cell2
    const cell2 = document.createElement('td');
    cell2.classList.add('name');
    cell2.textContent = name;

    //created cell 3
    const cell3 = document.createElement('td');
    cell3.classList.add('date');
    cell3.textContent = date;

    //created cell 4
    const cell4 = document.createElement('td');
    cell4.classList.add('amt');
    cell4.textContent = amount;
    
    //append of cells to newRow
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);

    tbody.appendChild(newRow);

    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
}

deleteButton.addEventListener("click", ()=>{

    // Find the rows with checked checkboxes
    const rowsWithCheckedCheckboxes = Array.from(tbody.querySelectorAll("tr")).filter(row => {
        const checkbox = row.querySelector("td input[type=checkbox]");
        return checkbox && checkbox.checked;});

    rowsWithCheckedCheckboxes.forEach((checkbox)=>{
        const row = checkbox.closest("tr");
            if (row) {
                row.remove();
            }
    })
})

// const checkedExpenses = Array.from(tbody.querySelectorAll("tr"));
//     console.log(checkedExpenses);