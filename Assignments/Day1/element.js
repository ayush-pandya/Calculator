class redColor extends HTMLElement{
    constructor() {
        super()
    }
    connectedCallback(){
        this.style.backgroundColor= "yellow";
        this.style.fontSize = "30px";
    }
}
customElements.define('yellow-color', redColor);
// the element name, the class of the element
// When we need to combine 2 or more css properties 