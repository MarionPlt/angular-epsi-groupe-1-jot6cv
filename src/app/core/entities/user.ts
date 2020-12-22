/* tslint:disable */
export class User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(obj?: any) {
    this.first_name = 'first_name' in obj ? obj.first_name : '';
    this.last_name = 'last_name' in obj ? obj.last_name : '';
    this.email = 'email' in obj ? obj.email : '';
    this.password = 'password' in obj ? obj.password : '';
  }
}
