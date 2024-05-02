class User {
    name!: string;
    email!: string;
    contact!: string;
    password!: string;
    constructor(name: string, email: string, contact: string, password: string) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.password = password;
    }
}


let users:User[] = [];

export default User;