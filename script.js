const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Select all elements with the class 'price'
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // 2. Loop through the elements and sum up their text values
    priceElements.forEach(element => {
        total += parseFloat(element.textContent);
    });

    // 3. Find the table to append the new row
    const table = document.querySelector('table');

    // 4. Create a new table row element
    const newRow = document.createElement('tr');

    // 5. Create a single cell for the total price spanning both columns
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: Rs ${total}`;

    // 6. Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);