const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Select all elements with class 'prices' as required by the test
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // 2. Loop through and calculate sum
    priceElements.forEach(element => {
        total += parseFloat(element.textContent) || 0;
    });

    // 3. Target the table to append the new row
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '2');

    // 4. Wrap the total sum value inside an element with id="ans"
    totalCell.innerHTML = `Total Price: Rs <span id="ans">${total}</span>`;

    // 5. Append everything back to the DOM
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);