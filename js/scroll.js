function scrollTrigger(selector) {
    let elements = document.querySelectorAll(selector)
    elements = Array.from(elements)
    
    elements.forEach(el => {
      // Attach the IntersectionObserver to the each of the elements
      addObserver(el)
    })
  }
  
  function addObserver(el) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
            }
      })
    }, {rootMargin:'-30px'}) // rootMargin is used to trigger the scroll animation with an offset of 'y' value.
    observer.observe(el)
  }

scrollTrigger('.indicator')