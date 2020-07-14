let addUser = document.getElementsByClassName('addUser')[0];
let doubleMoney = document.getElementsByClassName('doubleMoney')[0];
let showMillionaire = document.getElementsByClassName('showMillionaire')[0];
let richest = document.getElementsByClassName('richest')[0];
let entireWealth = document.getElementsByClassName('entireWealth')[0];
let main = document.getElementsByClassName('table')[0];
let users = [];

const getRandomPersons = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const [ user ] = data.results;
    addUsers(user);
}

let addUsers = ({name: {first, last}}) => {
    const randomMoney = Math.floor(Math.random() * 1000000);
    const new_user = {
        name: `${first} ${last}`,
        money: randomMoney
    }
    users.push(new_user);
    setRandomPersons();
}

const setRandomPersons = () => {
    const block = [`<h2><strong>PERSON</strong> WEALTH</h2>`];
    users.forEach(({name, money}) => {
        console.log(name, money)
        block1 = `<h4><strong>${name}</strong>$ ${money}</h4>`;
        block.push(block1);
    })
    main.innerHTML = block.join(' ');

}

doubleMoney.addEventListener('click', () => {
    users = users.map((user) => {
        return {
            name: user.name,
            money: user.money*2
        }
    });
    setRandomPersons()
})

entireWealth.addEventListener('click', () => {
    const totalWealth = users.reduce((acc, user) => {
        return acc += user.money
    }, 0)
    let Ele = document.createElement('div');
    Ele.innerHTML = `<h3>Total Wealth<strong>$ ${totalWealth}</strong></h3>`;
    main.appendChild(Ele);
})

showMillionaire.addEventListener('click', () => {
    users = users.filter((user) => user.money > 1000000);
    setRandomPersons();
})

richest.addEventListener('click', () => {
    users.sort((a, b) => b.money - a.money);
    setRandomPersons();
})

addUser.addEventListener('click', () => {
    getRandomPersons();
})


getRandomPersons();
getRandomPersons();
getRandomPersons();
