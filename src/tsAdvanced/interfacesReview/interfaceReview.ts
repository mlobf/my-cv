// classes

interface Inv {
  client: string;
  details: string;
  amount: number;
}

export class Invoice implements Inv {
  constructor(
    public client: string,
    public details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invoice = new Invoice('Marcos', 'Developer', 10000);

console.log(invoice.format());
