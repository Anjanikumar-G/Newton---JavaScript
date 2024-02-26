class Account {
  /*
      Write the remaining part of the class
    */
  constructor(accountNum, balance) {
    this.accountNum = accountNum;
    this.balance = balance;
    Account.totalAccounts++;
    Account.totalBalance += balance;
  }
  static returnTotalAccounts() {
    return Account.totalAccounts;
  }
  static returnTotalBalance() {
    return Account.totalBalance;
  }
}
Account.totalAccounts = 0;
Account.totalBalance = 0;
