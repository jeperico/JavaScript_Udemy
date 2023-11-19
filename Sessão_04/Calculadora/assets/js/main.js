// function createCalculator() {
//     return {
//         display: document.querySelector('#display'),

//         start() {
//             this.clickButton();
//             this.keyPressEnter();
//         },

//         clickButton() {
//             document.addEventListener('click', function (e) {
//                 const element = e.target;
//                 if (element.classList.contains('buttonNumber')) {
//                     this.buttonToDisplay(element.innerText);
//                 }
//                 if (element.classList.contains('buttonClear')) {
//                     this.clearDisplay();
//                 }
//                 if (element.classList.contains('buttonDelete')) {
//                     this.deleteOne();
//                 }
//                 if (element.classList.contains('buttonEqual')) {
//                     this.mathCount();
//                 }
//             }.bind(this))
//         },
        
//         keyPressEnter() {
//             this.display.addEventListener('keyup', (e) => {                
//                 if(e.keyCode === 13){
//                     this.mathCount();
//                 }
//             })
//         },

//         deleteOne() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         mathCount() {
//             let count = this.display.value;
//             try {
//                 count = eval(count);
                
//                 if (!count) {
//                     alert('Conta inválida!')
//                     return;
//                 }
//                 this.display.value = String(count);
//             } catch (e) {
//                 alert('Conta inválida!')
//             }
//         },

//         buttonToDisplay(value) {
//             this.display.value += value;
//         }
//     };
// }

// const calculator = createCalculator();
// calculator.start();



function Calculator() {
        this.display = document.querySelector('#display');

        this.start = () => {
            this.clickButton();
            this.keyPressEnter();
        };

        this.clickButton = () => {
            document.addEventListener('click', function (e) {
                const element = e.target;
                if (element.classList.contains('buttonNumber')) {
                    this.buttonToDisplay(element.innerText);
                }
                if (element.classList.contains('buttonClear')) {
                    this.clearDisplay();
                }
                if (element.classList.contains('buttonDelete')) {
                    this.deleteOne();
                }
                if (element.classList.contains('buttonEqual')) {
                    this.mathCount();
                }
            }.bind(this))
        };
        
        this.keyPressEnter = () => {
            this.display.addEventListener('keyup', (e) => {                
                if(e.keyCode === 13){
                    this.mathCount();
                }
            })
        };

        this.deleteOne = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        this.clearDisplay = () => {
            this.display.value = '';
        };

        this.mathCount = () => {
            let count = this.display.value;
            try {
                count = eval(count);
                
                if (!count) {
                    alert('Conta inválida!')
                    return;
                }
                this.display.value = String(count);
            } catch (e) {
                alert('Conta inválida!')
            }
        },

        this.buttonToDisplay = function(value) {
            this.display.value += value;
        }
}

const calculator = new Calculator;
calculator.start();
