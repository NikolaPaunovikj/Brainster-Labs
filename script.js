document.querySelector('#filter-coding').addEventListener('change', filterCoding)
document.querySelector('#filter-design').addEventListener('change', filterDesign)
document.querySelector('#filter-marketing').addEventListener('change', filterMarketing)
var btn = document.querySelector('.pagination-btn')

function hideAllCards() {
  const allCards = document.querySelectorAll('.filterCard')
  allCards.forEach(card => {
    card.style.display = 'none'
  })
}

function showAllCards() {
  const allCards = document.querySelectorAll('.filterCard') 
    allCards.forEach(card => {
      card.style.display = 'inline-block'
    })
  }

  function hideAllChecks() {
    const checks = document.querySelectorAll('.check')
    checks.forEach(check => {
      check.style.display = 'none'
    })
  }

  function hideBgColor() {
    const checkDivs = document.querySelectorAll('.check-div')
    checkDivs.forEach(checkDiv =>{
      checkDiv.style.background = 'none'
      checkDiv.style.color = 'white'
    })  
  }

  function checkboxCodingStyleChange(){
    const checkbox = document.getElementById('coding-check')
      checkbox.style.display = 'inline-block'
      const codingDiv = document.getElementById('coding-div')
      codingDiv.style.backgroundColor = 'red'
      codingDiv.style.color = 'black'
  }

function filterMarketing() {
  hideAllCards();
  hideAllChecks();
  hideBgColor();
  const mediaQuerry = window.matchMedia('(max-width:425px)')
  if(document.querySelector('#filter-marketing').checked) {
    const marketingCards = document.querySelectorAll('.marketing')
    marketingCards.forEach(marketingCard => {
      marketingCard.style.display = 'inline-block'
      const checkbox = document.getElementById('marketing-check')
      checkbox.style.display = 'inline-block'
      const marketingDiv = document.getElementById('marketing-div')
      marketingDiv.style.backgroundColor = 'red'
      marketingDiv.style.color = 'black'
      var btn = document.querySelector('.pagination-btn')
      btn.style.display = 'none'
      paginationshow = 0
    })
    document.querySelector('#filter-coding').checked = false
    document.querySelector('#filter-design').checked = false
  }  else if (mediaQuerry.matches && !(document.querySelector('#filter-marketing').checked)) {
    showAllCards()
    paginationshow = 0
    var hideCardSm = document.querySelectorAll('.hideCardSm')
   hideCardSm.forEach(hideCardSm =>{
    hideCardSm.style.display = 'none'
    btn.style.display = 'block'  
   })
  } else {
     showAllCards()     
  }
}

function filterCoding() {
  hideAllCards();
  hideAllChecks();
  hideBgColor();
  const mediaQuerry = window.matchMedia('(max-width:425px)')
  if(document.querySelector('#filter-coding').checked && !(mediaQuerry.matches)) {
    const codingCards = document.querySelectorAll('.coding')
    codingCards.forEach(codingCard => {
      codingCard.style.display = 'inline-block'
      checkboxCodingStyleChange()     
    })
    document.querySelector('#filter-design').checked = false
    document.querySelector('#filter-marketing').checked = false
  } else if (mediaQuerry.matches && document.querySelector('#filter-coding').checked){
    var paginationCodingHide = document.querySelectorAll('.paginationCodingHide')
    paginationCodingHide.forEach(paginationCodingHide =>{
      paginationCodingHide.style.display = 'none'
      const paginationCodingShow = document.querySelectorAll('.paginationCodingShow')
      paginationCodingShow.forEach(paginationCodingShow => {
      paginationCodingShow.style.display = 'inline-block'
      checkboxCodingStyleChange()
      btn.style.display = 'block'      
    })
    })
  } else if (mediaQuerry.matches && !(document.querySelector('#filter-coding').checked)) {
    showAllCards()  
    pagination() 
    paginationshow = 0
    var hideCardSm = document.querySelectorAll('.hideCardSm')
   hideCardSm.forEach(hideCardSm =>{
    hideCardSm.style.display = 'none'
   }) 
  } else {
    showAllCards()
  }
}

function filterDesign() {
  hideAllCards();
  hideAllChecks();
  hideBgColor();
  const mediaQuerry = window.matchMedia('(max-width:425px)')
  if(document.querySelector('#filter-design').checked) {
    const designCards = document.querySelectorAll('.design')
    designCards.forEach(designCard => {
      designCard.style.display = 'inline-block'
      const checkbox = document.getElementById('design-check')
      checkbox.style.display = 'inline-block'
      const designDiv = document.getElementById('design-div')
      designDiv.style.backgroundColor = 'red'
      designDiv.style.color = 'black'
      var btn = document.querySelector('.pagination-btn')
      btn.style.display = 'none'
      paginationshow = 0
    })
    document.querySelector('#filter-coding').checked = false
    document.querySelector('#filter-marketing').checked = false
  }  else if (mediaQuerry.matches && !(document.querySelector('#filter-design').checked)) {
    showAllCards()
    paginationshow = 0
    var hideCardSm = document.querySelectorAll('.hideCardSm')
   hideCardSm.forEach(hideCardSm =>{
    hideCardSm.style.display = 'none'
    btn.style.display = 'block'  
   })
  } else {
     showAllCards()  
  }
}

//  _________________PAGINACIJA___________________________
 // Paginacija na karticki ne e napraveno so media querries bidejki spored specifikacija, 
  // pobarano e taa da funkcionira na load na stranata
  function pagination() {
    paginationshow = 0
   const mediaQuerry = window.matchMedia('(max-width:425px)')
   if (mediaQuerry.matches) {
     var wrapper = document.querySelectorAll('.hideCardSm')
     wrapper.forEach(wrapper =>{
       wrapper.style.display = 'none'   
     })
     btn.style.display = 'block'
   }
 }

btn.addEventListener('click', function(){  
    const mediaQuerry = window.matchMedia('(max-width:425px)')
    var coding = document.querySelectorAll('.coding')  
    const paginationCodingShow = document.querySelectorAll('.paginationCodingShow')
    if ((mediaQuerry.matches) && document.querySelector('#filter-coding').checked ) {
      paginationshow = 0
      coding.forEach(coding =>{
        paginationshow += 1
        coding.style.display = 'block'     
        if(paginationshow === 10) {
          btn.style.display = 'none'
        }
       })
    } else  {     
      let wrapper = document.querySelectorAll('.hideCardSm')
      for(let i = paginationshow; i< paginationshow + 6; i++){            
        if(wrapper[i]){
        wrapper[i].style.display = 'block'    
      }           
      }
      paginationshow+=6      
      if (paginationshow === 18){
        event.target.style.display = 'none'
      }
    }    
  })
 
 pagination()


 
