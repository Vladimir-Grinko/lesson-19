import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    #donateForm
    #donateList

    constructor() {
        this.state = {
            donates: [],
            totalAmount: 0,
        };
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.#donateList = new DonateList(this.state.donates);       
    }
    
    createNewDonate(newDonates) {
        this.state.donates.push(newDonates);
        this.state.totalAmount +=Number(newDonates.amount);
        this.#donateForm.updateTotalAmount(this.state.totalAmount);
        this.#donateList.updateDonates(this.state.donates);
    }

    run() {
        const donateFormHTML = this.#donateForm.render();
        const donateListHTML = this.#donateList.render();
        document.body.append(donateFormHTML, donateListHTML);
    }

}
