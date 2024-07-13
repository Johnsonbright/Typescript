
// public, private and read only
export class Invoice {
    //   readonly  client: string;
    //    private details: string;
    //     public amount: number;
    
        //readonly allows us  read value inside or outside the class but we cant change it.
      //private allows us to read and change inside of the class
      //public allows us to read and change outdienthe class
      
    
        constructor(
            readonly client: string,
            private details: string,
            public amount: number,
        ){
    
        }
        
    
        format() {
            return `${this.client} owes £${this.amount} for ${this.details}`
        }
    }