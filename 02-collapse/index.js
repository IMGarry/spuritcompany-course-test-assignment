const content = document.querySelector('.collapsible__content')

content.style.overflow = 'hidden'

function animate(transformStart, transformEnd) {
  currentAnimation = content.animate(
    { height: [transformStart, transformEnd] },
    // we can use 'opacity' instead with params (0,1) as calculatable properties, it depends on task
    {
      duration: 250,
      easing: 'linear',
      fill: 'both',
    }
  )
}

function collapse() {
  if (!content.classList.contains('collapsed')) {
    animate('50px', '0px')

    content.classList.add('collapsed')
  }
}

function show() {
  if (content.classList.contains('collapsed')) {
    animate('0px', '50px')
    content.classList.remove('collapsed')
  }
}

document
  .querySelector('.collapsible__action--hidden')
  .addEventListener('click', show)

document
  .querySelector('.collapsible__action--visible')
  .addEventListener('click', collapse)
