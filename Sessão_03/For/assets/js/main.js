const element = [
    {tag: 'p', text: 'Frase 1'}, // 0
    {tag: 'div', text: 'Frase 2'}, // 1
    {tag: 'footer', text: 'Frase 3'}, // 2
    {tag: 'section', text: 'Frase 4'} // 3
];

function createContainer(){
    const main = document.querySelector('#mainContainer')
    const container = document.createElement('div');
    main.appendChild(container);
    container.classList.add('containerRes');
    return container
}

createContainer()


const [ indexP, indexDiv, indexFooter, indexSection ] = element
console.log(indexP, indexDiv, indexFooter, indexSection)
for(i = 0; i < element.length; i++){
}