class SavingsAccount extends Account{
constructor(number,interest){
   super(number);
   this._interest = interest;
}

getInterest(){
    return this._interest;
}

setInterest(interest){
    this._interest = interest;
}

addInterest(){
    this._balance = this._balance * this._interest / 100;
}

toString(){
    return "Saving Account " + this._number +" Interest "+this._interest +" : balance " + this._balance;
}
endOfMonth(){
    this.addInterest();
    return "Interest added SavingsAccount "+this._number+" : balance: "+this._balance+" interest: "+this._interest;
}


}