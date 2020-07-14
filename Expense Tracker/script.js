const text = document.getElementById('text');
const amount = document.getElementById('amount');
const submitBtn = document.getElementById('submitBtn');
const listBlock = document.getElementById('list');
const Balance = document.getElementsByClassName('show-balance')[0];
const expense = document.getElementsByClassName('exp')[0];
const income = document.getElementsByClassName('inc')[0];

let localStorageTransaction = JSON.parse(
    localStorage.getItem("transactions")
);

let transaction = localStorage.getItem('transactions') !== null ? localStorageTransaction : [];

getList = () => {
    return transaction
        .map((item) => {
            if (item.amount > 0) {
            return `<li class="list-item green">${item.text}
                            <span>+$${Math.abs(item.amount)}</span>
                            <button onclick="removeItem(${item.id})">x</button>
                    </li>`;
            } else {
            return `<li class="list-item red">${item.text}
                            <span>-$${Math.abs(item.amount)}</span>
                            <button onclick="removeItem(${item.id})">x</button>
                    </li>`;
            }
        })
        .join(" ");
}

updateCash = () => {
    let inc = transaction.filter(item => item.amount>0).reduce((acc,ele) => acc+=Math.abs(ele.amount),0);
    let exp = transaction.filter(item => item.amount<0).reduce((acc,ele) => acc+=Math.abs(ele.amount),0);
    console.log(inc, exp)
    let bal = transaction.reduce((acc,ele) => acc+=+ele.amount,0);
    income.innerHTML = `$` + parseInt(inc).toFixed(2);
    expense.innerHTML = `$` + parseInt(exp).toFixed(2);
    Balance.innerHTML =
    bal >= 0
        ? `+$${parseInt(bal).toFixed(2)}`
        : `-$${Math.abs(parseInt(bal)).toFixed(2)}`;
    console.log(bal)
};

deleteItem = (id) => {
    transaction = transaction.filter(item => item.id !== id);
    localStorage.setItem('transactions', transaction);
}

updateDOM = () => {  
    const List = getList();
    listBlock.innerHTML = List;
    updateCash();
}

submitBtn.addEventListener('click', () => {

    let randomID = getRandomId();

    let currentTransaction = [...transaction]; 
    currentTransaction.push({
        id: randomID,
        text: `${text.value}`,
        amount: amount.value
    });
    transaction = [...currentTransaction];

    localStorage.setItem('transactions', JSON.stringify(transaction));

    const list = getList();

    listBlock.innerHTML = list; 
    text.value = '';
    amount.value = '';  
    updateCash();
})

getRandomId = () => {
    return Math.floor(Math.random()*10000000);
}

removeItem = (id) => {
    transaction = transaction.filter(item => item.id!= id)
    localStorage.setItem("transactions", JSON.stringify(transaction));
    updateDOM();
    updateCash();
}

updateDOM();