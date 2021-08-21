import {objSetting as obj} from '../core/constants/settings'

export class DonateForm {
    #container

    constructor(totalAmount, createNewDonate) {
        this.totalAmounts = totalAmount;
        this.create = createNewDonate;
        this.#container = document.createElement('form');
        this.#container.className = 'donate-form';
        
    }
    
    updateTotalAmount(amount) {
        const mainTitle = document.querySelector('#total-amount');
        mainTitle.textContent = `${amount}${obj.currency}`;
    }

    render() {
        
        const mainTitle = document.createElement('h1');
        mainTitle.id = 'total-amount';
        mainTitle.textContent = `${this.totalAmounts}${obj.currency}`;
        this.#container.append(mainTitle);

        
        const inputLabel = document.createElement('label');
        inputLabel.className = 'donate-form__input-label';
        inputLabel.textContent = `Введите сумму в ${obj.currency}`;

        const inputTitle = document.createElement('input');
        inputTitle.className = 'donate-form__donate-input';
        inputTitle.name = 'amount';
        inputTitle.type = 'number';
        inputTitle.max = '100';
        inputTitle.min = '0';
        inputTitle.setAttribute('required', "");
        
        inputLabel.append(inputTitle);

        const buttonDonate = document.createElement('button');
        buttonDonate.className = 'donate-form__submit-button';
        buttonDonate.type = 'submit';
        buttonDonate.textContent = 'Задонатить';

        this.#container.append(inputTitle, buttonDonate);

        this.#container.addEventListener('submit', (event) => {
            event.preventDefault();
            const amontValue = event.target.amount.value;
            const newEventDonate = {
                amount: amontValue,
                date: new Date(),
            };
            inputTitle.value = '';
            this.create(newEventDonate);
            console.log(newEventDonate)
        })
        
        return this.#container;
    }
}
