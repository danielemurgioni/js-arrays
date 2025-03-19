const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = teachers;

//ho letto male la consegna, pensavo di dover stampare solo i nomi con lunghezza uguale a 5 caratteri, lascio la soluzione sbagliata come ricordo!

/* for(i=0; i<longNames.length; i++){
  if(longNames[i].length!=5 && longNames[i].length!=6 && longNames[i].length!=4){ 
    console.log(longNames[i]);
  };
} */

//qui sotto c'è la vera soluzione del secondo esercizio...

for(i=0; i<longNames.length; i++){
  if(longNames[i].length>=5){ 
    console.log(longNames[i]);
  };
}

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5,1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers;

for(i=0; i<isFabioPresent.length; i++){
  if(isFabioPresent[i] == 'Fabio'){
    console.log(isFabioPresent[i]);
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString

const teachersString = teachers.toString();
console.log(teachersString);