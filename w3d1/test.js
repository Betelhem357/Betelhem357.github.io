
describe("Test getNumber method",function(){
    it("Check if it returns the correct setted number!",function(){
        let ac = new Account(7);
        assert.equal(ac.getNumber(),7);
    });
});

describe("Test deposit method",function(){
    it("Check if it returns the correct deposit",function(){
        let ac = new Account(7);
        ac.deposit(30);
        assert.equal(ac.getBalance(),30);
    });
});

describe("Test withdraw method",function(){
    it("Check if it returns the correct withdraw amount after withdrowing 200 from 700 balance",function(){
        let ac = new Account(7);
        ac.deposit(700);
        ac.withdraw(200);
        assert.equal(ac.getBalance(),500);
    });
});

describe("Test toString method in Account class",function(){
    it("Check if it returns the correct toString",function(){
        let ac = new Account(7);
        ac.deposit(700);
        assert.equal(ac.toString(),"Account " + ac.getNumber() + ": balance " + ac.getBalance());
    });
});

describe("Test getInterest method of saving account class",function(){
    it("Check if it returns the correct interest",function(){
        let ac = new SavingsAccount(10,2);
        ac.setInterest(5);
        assert.equal(ac.getInterest(),5);
    });
});

describe("Test addInterest method of Saving account class",function(){
    it("Check if interest added correctly",function(){
        let ac = new SavingsAccount(10,5);
        ac.deposit(700);
        ac.addInterest();
        assert.equal(ac.getBalance(),35);
    });
});

describe("Test toString method of Saving account class",function(){
    it("Check if it returns the correct toString",function(){
        let ac = new SavingsAccount(10,5);
        ac.deposit(700);
        ac.addInterest();
        assert.equal(ac.toString(),"Saving Account 10 Interest 5 : balance 35");
    });
});

describe("Test get overdraft method of Checking account class",function(){
    it("Check if it throws exception when withdrow amount greater than overdraft",function(){
       try {
        let ac = new CheckingAccount(10,100);
        ac.setOverDraft(100);
        ac.deposit(100);
        ac.withdraw(600);
       } catch (e) {
        expect(e).to.be.instanceOf(Error)
        expect(e.message).to.eql("Insufficient funds");
       }
    });
});

describe("Test addAccount method of Bank class",function(){
    it("Check if account added",function(){
        let bank = new Bank();
        let num = bank.addAccount();
        assert.equal(bank.accounts.length,1);
        assert.equal(bank.accounts[0].getNumber(),num);
    });
});

describe("Test addSavingsAccount method of Bank class",function(){
    it("Check if saving account added",function(){
        let bank = new Bank();
        let num = bank.addSavingsAccount(7);
        assert.equal(bank.accounts.length,1);
        assert.equal(bank.accounts[0].getNumber(),num);
        assert.equal(bank.accounts[0] instanceof SavingsAccount,true);
        assert.equal(bank.accounts[0].getInterest(),7);

    });
});
describe("Test addcheckingAccount method of Bank class",function(){
    it("Check if checking account added",function(){
        let bank = new Bank();
        let num = bank.addCheckingAccount(7);
        assert.equal(bank.accounts.length,1);
        assert.equal(bank.accounts[0].getNumber(),num);
        assert.equal(bank.accounts[0] instanceof CheckingAccount,true);
        assert.equal(bank.accounts[0].getOverDraft(),7);

    });
});

describe("Test remove account method of Bank class",function(){
    it("Check if account removed",function(){
        let bank = new Bank();
        let num1 = bank.addCheckingAccount(7);
        let num2 = bank.addCheckingAccount(5);
        bank.closeAccount(num1);
        assert.equal(bank.accounts.length,1);

    });
});

describe("Test accountReport method of Bank class",function(){
    it("Check if account report is correct",function(){
        let bank = new Bank();
        let num1 = bank.addCheckingAccount(7);
        let num2= bank.addSavingsAccount(7);
       let report= bank.accountReport();
        assert.equal(bank.accounts.length,2);
        assert.equal(report, bank.accounts[0].toString()+"\n"+bank.accounts[1].toString()+"\n");

    });
});

describe("Test endofmonth method of Bank class",function(){
    it("Check if end of month reported correctly",function(){
        let bank = new Bank();
        let num1 = bank.addCheckingAccount(7);
        let num2= bank.addSavingsAccount(8);
       let report= bank.endOfMonth();
        assert.equal(report,"CheckingAccount "+bank.accounts[0].getNumber()
        +" : balance: "+bank.accounts[0].getBalance()+" overdraft limit: "+ bank.accounts[0].getOverDraft()+"\n"+
        "Interest added SavingsAccount "+  bank.accounts[1].getNumber()+" : balance: "+bank.accounts[1].getBalance()
        + " interest: "+bank.accounts[1].getInterest() +"\n");

    });
});

// addAccount(), addSavingsAccount(interest),
// addCheckingAccount(overdraft) m