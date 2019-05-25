// Exercise 01
class Usuario {
  constructor(eMail, senha) {
    (this.eMail = eMail), (this.senha = senha), (this.admin = false);
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log("Exercise 01");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

// Exercise 02
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];
console.log("Exercise 02");

console.log("Exercise 02.1");
const map = usuarios.map((item, index) => item.idade);
console.log(map);

console.log("Exercise 02.2");
const filter = usuarios.filter(
  item => item.idade > 18 && item.empresa == "Rocketseat"
);
console.log(filter);

console.log("Exercise 02.3");
const find = usuarios.find(item => item.empresa == "Google");
console.log(find);

console.log("Exercise 02.4");
const mix = usuarios.filter(item => item.idade * 2 <= 50);
console.log(mix);

//Exercise 03
// 3.1
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => {
  nome, idade;
};

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => {
  new Promise(function(resolve, reject) {
    return resolve();
  });
};

// Exercise 04
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const { nome, cidade, estado } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: "Diego", idade: 23 });

//Exercise 05 
const arr = [1, 2, 3, 4, 5, 6]
const {x, ...y}  
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.2
const soma = (...params) => {
  params.reduce( function(total, next){
    return total + next;
  })
} 
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.3
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 usuario2 = {...resto, nome: "Gabriel"};
 usuario2 = {...resto, endereco: "Lontras"};

 //Exercise 06
 const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ' + ${usuario} + ' possui ' + ${idade} + ' anos`);

//Exercise 07
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};