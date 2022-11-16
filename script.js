document.getElementById("script_01").onclick = () => { script_01(); }
document.getElementById("script_02").onclick = () => { script_02(); }
document.getElementById("script_03").onclick = () => { script_03(); }
document.getElementById("script_04").onclick = () => { script_04(); }
document.getElementById("script_05").onclick = () => { script_05(); }
document.getElementById("script_06").onclick = () => { script_06(); }
document.getElementById("script_07").onclick = () => { script_07(); }

function script_01()
{
  console.log("Hello World !");
  let name = prompt("What's your Name ?");
  console.log("Hello " + name + " !");
}

function script_02()
{
  function factoriel(num)
  {
      var f = 1;
      for(var i = 1; i <= num; i++)
      {
          f = f* i;
      }
      return(f);
  }

  console.log("FACTORIELLE CALCUL");
  let n = prompt("De quel nombre entier supérieur à zéro veux-tu calculer la factorielle ?");
  if (n <= 0) {console.log("Are U stupid ?");}
  else        {console.log("La Factorielle de "+n+" est : " + factoriel(n));}
}

function script_03()
{
  console.log("Salut, bienvenue dans ma super pyramide !");
  let floor = prompt("Combien d'étages veux-tu ?");
  for ( let i = 1 ; i <= floor ; i++ )
  {
    if (i == 1) { console.log(" ".repeat(floor-i)+"#".repeat(i));}
    else        { console.log(" ".repeat(floor-i)+"#".repeat(i)+"#".repeat(i-1))}
  }
}

function script_04()
{
  const entrepreneurs = [
    { first: 'Steve',   last: 'Jobs',       year: 1955 },
    { first: 'Oprah',   last: 'Winfrey',    year: 1954 },
    { first: 'Bill',    last: 'Gates',      year: 1955 },
    { first: 'Sheryl',  last: 'Sandberg',   year: 1969 },
    { first: 'Mark',    last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles',    year: 1981 },
    { first: 'Jeff',    last: 'Bezos',      year: 1964 },
    { first: 'Yann',    last: 'Guiot',      year: 1982 },
    { first: 'Elon',    last: 'Musk',       year: 1971 },
    { first: 'Maëva',   last: 'Gilles',     year: 1986 },
    { first: 'Walt',    last: 'Disney',     year: 1901 },
    { first: 'Larry',   last: 'Page',       year: 1973 },
    { first: 'Jack',    last: 'Dorsey',     year: 1976 },
    { first: 'Evan',    last: 'Spiegel',    year: 1990 },
    { first: 'Dylan',   last: 'Doré',       year: 1996 },
    { first: 'Travis',  last: 'Kalanick',   year: 1976 },
    { first: 'Marc',    last: 'Andreessen', year: 1971 },
    { first: 'Peter',   last: 'Thiel',      year: 1967 }
    ];

    function display(array) { for(let i = 0; i < array.length; i++) {console.log(array[i]);}}

    console.log("Liste des entrepreneurs qui sont nés dans les années 70\n\n");
    let result = (entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980));
    display(result);

    console.log("\n Array contenant le prénom et le nom des entrepreneurs\n\n");
    let names = (entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`));
    display(names);

    console.log("\nQuel âge devrait avoir chaque inventeur aujourd'hui ?\n\n");
    actual_year = 2022
    birth_year = (entrepreneurs.map(entrepreneurs => entrepreneurs.year))
    for (i = 0; i < birth_year.length; i++)
    {
        console.log((names[i] + " devrait avoir ") + (actual_year - birth_year[i]) + " ans.");
    }

    console.log("\nEntrepreneurs par ordre alphabétique du Nom de famille.\n\n");
    entrepreneurs.sort(function (a,b) {return a.last.localeCompare(b.last);})
    display(entrepreneurs);
}

function script_05()
{
  const books = [
    { title: 'Gatsby le magnifique',          id: 133712,  rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634,  rented: 28 },
    { title: 'Orgueil & Préjugés',            id: 873495,  rented: 67 },
    { title: 'Les frères Karamazov',          id: 450911,  rented: 55 },
    { title: 'Dans les forêts de Sibérie',    id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911,  rented: 45 },
    { title: 'Et on tuera tous les affreux',  id: 67565,   rented: 36 },
    { title: 'Le meilleur des mondes',        id: 88847,   rented: 58 },
    { title: 'La disparition',                id: 364445,  rented: 33 },
    { title: 'La lune seule le sait',         id: 63541,   rented: 43 },
    { title: 'Voyage au centre de la Terre',  id: 4656388, rented: 38 },
    { title: 'Guerre et Paix',                id: 748147,  rented: 19 }
    ];

  function display(array){ for(let i = 0; i < array.length; i++) { console.log(array[i]); }}
  
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?\n")
  let flag = 0;
  books.forEach(book => book.rented === 0 && flag++);
  if (flag > 0) {console.log("=> NON");}
  else {console.log("=> OUI");}

  let mostBorrowedBook =  books.find(book => book.rented === Math.max.apply(Math, books.map(b => b.rented)));
  console.log("\n\nLe livre le plus emprunté est : " + mostBorrowedBook.title + "\n => emprunté " + mostBorrowedBook.rented + " fois");

  let lessBorrowedBook =  books.find(book => book.rented === Math.min.apply(Math, books.map(b => b.rented)));
  console.log('\n\nLe livre le moins emprunté est ' + lessBorrowedBook.title + "\n => emprunté " + lessBorrowedBook.rented + " fois");

  console.log("\n\nLe livre avec l'ID: 873495 est :\n");
  console.log(books.find(book => book.id === 873495))

  console.log("\n\nSuppression du livre avec l'ID: 133712\n");
  console.log(books.find(book => book.id == 133712));
  console.log("=> Supprimé");
  for (let i in books) { if(books[i].id === 133712) {books.splice(i, 1);}}
  
  console.log("\n\nLivres triés par ordre alphabétique (sans l'ID 133712 supprimé)\n");
  books.sort(function (a,b) {return a.title.localeCompare(b.title);})
  display(books);
}

function script_06()
{
  let ARN1 = "CCGUCGUUGCGCUACAGC";
  let ARN2 = "CCUCGCCGGUACUUCUCG";
  
  function translateARN(arn) 
  {
    if (arn.length % 3 !== 0) {return 'ARN Invalide !';}
    
    const sequence = [];

    for (let i = 0; i < arn.length; i += 3) {sequence.push(arn.slice(i, i + 3));}
  
    const translatedSequence = [];
    sequence.forEach(codon => 
    {
      let protein;
      switch (true) 
      {
        case /UCU|UCC|UCA|UCG|AGU|AGC/.test(codon):
          protein = 'Sérine';
          break;
        case /CCU|CCC|CCA|CCG/.test(codon):
          protein = 'Proline';
          break;
        case /UUA|UUG/.test(codon):
          protein = 'Leucine';
          break;
        case /UUU|UUC/.test(codon):
          protein = 'Phenylalanine';
          break;
        case /CGU|CGC|CGA|CGG|AGA|AGG/.test(codon):
          protein = 'Arginine';
          break;
        case /UAU|UAC/.test(codon):
          protein = 'Tyrosine';
          break;
        default:
          protein = undefined;
          break;
      }
      translatedSequence.push(protein);
    })
    return translatedSequence.includes(undefined) ? 'ARN Invalide !' : translatedSequence.join('-');
  }
  
  console.log("\nTranslate exemple ARN : CCGUCGUUGCGCUACAGC\n");
  console.log(translateARN(ARN1));

  console.log("\nTranslate exemple ARN : CCUCGCCGGUACUUCUCG\n");
  console.log(translateARN(ARN2));

  let ARN = prompt("Quel est l'ARN que tu souhaites transfomer en protéines ? ('A-U-G-C' multiple de 3) ")
  console.log("\nTranslate Your ARN : "+ARN+"\n");
  console.log(translateARN(ARN));
}

function script_07()
{
console.log("WELCOME TO ACNE-BOT - (Enter 'EXIT' to quit)");
let user_answer = "";
let exit = false;
while((exit === false))
{
  function acne_bot(answer)
  {
    switch (true){
      case answer === "EXIT": case answer === "Exit": case answer === "exit":
        exit = true;
        return "Bye!";
      case answer.slice(-1) === '?':
        return "Ouais Ouais...";
      case answer!=="" && answer === answer.toUpperCase():
        return "Pwa, calme-toi...";
      case answer.includes('fortnite'): case answer.includes('Fortnite'):
        return "on s'fait une partie soum-soum ?";
      case answer === "":
        return "t'es en PLS ?";
      default :
        return "balek!";
    }
  }

  user_answer = prompt("Tu veux quoi ?")
  let message = acne_bot(user_answer);
  console.log(message);
}
}


