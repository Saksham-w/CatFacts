const facts = document.querySelector('#facts')
const btn = document.querySelector('.btn')

const catFactsUrl = 'https://catfact.ninja/fact'

function loadCatFact(){
    fetch(catFactsUrl).then((rawData)=>{
        return rawData.json()
      }).then((data)=>{
      //   console.log(data.fact)
        facts.innerHTML=data.fact
      })      
}

btn.addEventListener('click',loadCatFact)
loadCatFact()
