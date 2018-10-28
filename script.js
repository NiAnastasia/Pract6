class User{
	constructor(name, email, password, tel){
		this.name = name;
		this.email = email;
		this.password = password;
		this.tel = tel;

	}
}

class Admin extends User{
	deleteClassUser(){
		User = null;
		console.log(User);
	}
	
}

let admin = new Admin('Admin', 'admin@gmail.com', '123qwe', '8-888-888-88-88')
console.log(admin); 