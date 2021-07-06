class Bank{
constructor(){
    this.accounts = [];
    this.bankStartId = 0;
}

addAccount(){
    let ac = new Account(this.bankStartId);
    this.accounts.push(ac);
    this.bankStartId++;
    return this.bankStartId-1;
}
addSavingsAccount(interest){
    let sac = new SavingsAccount(this.bankStartId,interest);
    this.accounts.push(sac);
    this.bankStartId++;
    return this.bankStartId-1;
}
addCheckingAccount(overdraft){
    let cac = new CheckingAccount(this.bankStartId,overdraft);
    this.accounts.push(cac);
    this.bankStartId++;
    return this.bankStartId-1;
}
closeAccount(number){
    this.accounts.splice(number, 1);
}
accountReport(){
    let report = "";
    this.accounts.forEach(element => {
        report=report+element.toString()+"\n";
    });
    return report;
}
endOfMonth(){
    let output = "";
    this.accounts.forEach(element => {
        output=output+element.endOfMonth()+'\n';
    });
    return output;
}
}