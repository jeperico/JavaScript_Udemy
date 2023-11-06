function criaCalculadora() {
    return {
        display: document.querySelector('#display'),
        calculadora: document.querySelector('#calculadora'),

        start() {
            this.clickBotao();
            this.clickEnter();
        },

        clickBotao() {
            this.calculadora.addEventListener('click', function (e) {
                const element = e.target;
                if (element.classList.contains('buttonNumber')) {
                    this.buttonDisplay(element.innerText);
                }
                if (element.classList.contains('buttonEqual')) {
                    this.fazConta();
                }
                if (element.classList.contains('buttonDelete')) {
                    this.deleteDisplay();
                }
                if (element.classList.contains('buttonClear')) {
                    this.clearDisplay();
                }
            }.bind(this))
        },
        
        fazConta() {
            const conta = this.display.value
            try {
                if(!conta) {
                    this.contaInvalida();
                    return;
                }
                this.display.value = eval(conta);
            } catch {
                this.contaInvalida();
            }
        },
        
        contaInvalida() {
            alert('Conta inválida!')
            this.clearDisplay();
        },

        buttonDisplay(num) {
            this.display.value += num;
        },

        deleteDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            display.value = '';
        },

        clickEnter() {
            document.addEventListener('keypress', function(e) {
                if(e.key === 'Enter'){
                    this.keyClick();
                }
            }.bind(this))
        },
        keyClick() {
            this.fazConta();
        }
    }
}

const calculadora = criaCalculadora();
calculadora.start();