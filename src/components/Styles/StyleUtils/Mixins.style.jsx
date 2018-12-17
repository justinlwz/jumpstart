/*


  Styled Components Mixins


*/



export function radius({
  value = '3px',
}) {
  return `border-radius: ${value};`
}

export function card() {
  return ` 
    ${shadow()};
    background: white;
  `
}

export function shadow({
  inset = false,
  offsetX = '0px',
  offsetY = '1px',
  spread = '2px',
  opacity = 0.15
}) {
  return `
    box-shadow: ${inset ? 'inset' : ''} ${offsetX} ${offsetY} ${spread} rgba(0, 0, 0, ${opacity});
  `
}

export function transition({
  prop = 'all',
  timing = '300ms',
  easing = 'ease-in-out'
}) {
  return `
    transition: ${prop} ${timing} ${easing};
  `
}

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}