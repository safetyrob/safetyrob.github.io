//Part 2: create a simple application using two of the concepts taught in the Udemy course that aren't copied from the course. Apply these in one of the two scenarios
//Scenario 1:
//A company has come to you about wanting a big project built and demo'd by Monday to show a banking portal. They want you to use polymorphism methods and inheritance to save the amount in someones bank and then when they make a payment or take money out of the bank that it will reflect this information while they are on the app.

class AccountBalance {
  constructor(balance) {
    balance = parseInt(balance);
    this.balance = balance;
  }
  deposit(valueX) {
    if (valueX === "") {
      return "0";
    }
    valueX = parseInt(valueX);
    this.balance = this.balance + valueX;
  }
  withdraw(valueY) {
    if (valueY === "") {
      return "0";
    }
    valueY = parseInt(valueY);
    this.balance = this.balance - valueY;
  }
  currentBalance() {
    return this.balance;
  }
}

function getAccountBalance() {
  let newBalance = new AccountBalance(localStorage.getItem("accountbal"));
  let depositAmount = document.getElementById("deposit").value;
  let withdrawAmount = document.getElementById("withdraw").value;
  newBalance.deposit(depositAmount);
  newBalance.withdraw(withdrawAmount);
  document.getElementById("accountbal").value = newBalance.currentBalance();
  localStorage.setItem("accountbal", newBalance.currentBalance());
  document.getElementById("deposit").value = "";
  document.getElementById("withdraw").value = "";
}

function retriveCurrentAccountBalance() {
  //Get account balance from localStorage if available
  if (localStorage.getItem("accountbal")) {
    let savedBalance = localStorage.getItem("accountbal");
    document.getElementById("accountbal").value = savedBalance;
  } else {
    let newBalance = new AccountBalance(25);
    localStorage.setItem("accountbal", newBalance.currentBalance());
    retriveCurrentAccountBalance();
  }
}

//function ClearFields() {
//document.getElementById("deposit").value = "";
// document.getElementById("withdraw").value = "";
//}

retriveCurrentAccountBalance();
