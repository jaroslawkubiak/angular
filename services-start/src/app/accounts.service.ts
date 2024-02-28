export class AccountsService {
  accounts = [
    {
      name: 'Luke Skywalker',
      status: 'active',
    },
    {
      name: 'Leia Organa',
      status: 'inactive',
    },
    {
      name: 'Han Solo',
      status: 'unknown',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
