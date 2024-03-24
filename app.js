import data from "./data.js"

// console.log(data);
const template = document.querySelector('.jobs__template')
const ul = document.querySelector('.job__list')

data.forEach((job) => {
    const { company, position, postedAt, contract, location, logo, languages}   = job;
    const li = template.content.cloneNode(true);
    console.log(data);

    const image = li.querySelector('.job__img')
    image.src = logo;
    const jCom = li.querySelector('.job__company')
    jCom.textContent = company
    const jPos = li.querySelector('.job__position')
    jPos.textContent = position
    const pDay = li.querySelector('.post-day')
    pDay.textContent = postedAt
    const contractEL = li.querySelector('.contract-el')
    contractEL.textContent = contract
    const country = li.querySelector('.country')
    country.textContent = location
    const lang = li.querySelector('.lang-list')
    lang.textContent = languages 

    ul.appendChild(li)
})