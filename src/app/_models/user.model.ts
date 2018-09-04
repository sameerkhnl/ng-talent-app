export class User {

  constructor(private email: string, private password: string) {

  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
