import {objSetting as obj} from '../core/constants/settings'
import {getFormattedTime} from '../core/utils/index'

export class DonateList {
    #containerDonate

    constructor(donatesMock) {
       
        this.donates = donatesMock;  
        this.#containerDonate = document.createElement('div');
        this.#containerDonate.className = 'donates-container';
        this.donatesListContainer = document.createElement('div');
        this.donatesListContainer.className = 'donates-container__donates';

    }
    
    updateDonates(newDonate) {
        this.donatesListContainer.innerHTML = '';

        newDonate.forEach(donate => {
            this.donatesListContainer.innerHTML += `
          <div class="donate-item">${getFormattedTime(donate.date)} - <b>${donate.amount}${obj.currency}</b></div> 
          `
        })
    }
    

    render() {        
        const donatesTitle = document.createElement('h2');
        donatesTitle.className = 'donates-container__title';
        donatesTitle.textContent = 'Список донатов';
        
        this.donates.forEach(donate => {
            this.donatesListContainer.innerHTML += `
            <div class="donate-item">${getFormattedTime(donate.date)} - <b>${donate.amount}${obj.currency}</b></div>`
        })

        this.#containerDonate.append(donatesTitle, this.donatesListContainer);
        
        return this.#containerDonate;
    }
}

