/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1
// type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: Role // antes era "Admin" | "Normal"
// }

// const userOne:TPerson = {
//   id: "01",
//   name: "Murilo",
//   email: "murilo@email.com",
//   password: "123456",
//   role: "Normal"
// }

// const userTwo:TPerson = {
//   id: "02",
//   name: "Heytor",
//   email: "heytor@email.com",
//   password: "1234567",
//   role: "Admin"
// }

// console.table([userOne, userTwo])


//1.2

type AdminAccount = {
  account: string | number,
  permission: boolean
}

type NormalAccount = {
  account: string | number,
  permission: boolean
}



/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role // antes era "Admin" | "Normal"
}

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

//Testando Usuários
const userOne:TPerson = {
  id: "01",
  name: "Murilo",
  email: "murilo@email.com",
  password: "123456",
  role: Role.ADMIN
}

const userTwo:TPerson = {
  id: "02",
  name: "Heytor",
  email: "heytor@email.com",
  password: "1234567",
  role: Role.NORMAL
}

//2.2 Tipo Intersection unindo: pessoa (Person) + Permissão (Role)

type AdminUser = TPerson & AdminAccount

const userThree: AdminUser = {
  id: "03",
  name: "Goiaba",
  email: "goiaba@email.com",
  password: "123456",
  role: Role.ADMIN,
  account: "admin1",
  permission: true
}

type NormalUser = TPerson & NormalAccount

const userFour: NormalUser = {
  id: "04",
  name: "Melancia",
  email: "melancia@email.com",
  password: "123456",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}

//2.3 Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

const arrayUser:  AdminUser[] | NormalUser[] = []

//2.4 Crie duas pessoas, uma com permissão normal e a outra admin;
// Já foi feito

//2.5 Guarde essas pessoas no array de usuários.

arrayUser.push(userThree)
arrayUser.push(userFour)

console.log(arrayUser)