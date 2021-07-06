class CheckingAccount extends Account{
    constructor(number,overdraft){
         super(number);
         this._overdraft = overdraft;
    }
    getOverDraft(){
        return this._overdraft;
    }

    setOverDraft(overdraft){
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance+this._overdraft) {
            console.log('I am here');
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance;
    }
    endOfMonth(){
        if(this._balance<0){
            return "Warning, low balance CheckingAccount "+this._number+" : balance: "+this._balance+" overdraft limit: "+ this._overdraft;
        }
        return "CheckingAccount "+this._number+" : balance: "+this._balance+" overdraft limit: "+ this._overdraft;
    }
}