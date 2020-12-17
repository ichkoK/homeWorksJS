const studentArr = [
  {
    name: "Сергей",
    surname: "Войлов",
    ratingPoint: 1000,
    schoolPoint: 1000
  },
  {
    name: "Татьяна",
    surname: "Коваленко",
    ratingPoint: 880,
    schoolPoint: 700
  },
  {
    name: "Анна",
    surname: "Кугир",
    ratingPoint: 1430,
    schoolPoint: 1200
  },
  {
    name: "Станислав",
    surname: "Щелоков",
    ratingPoint: 1130,
    schoolPoint: 1060
  },
  {
    name: "Денис",
    surname: "Хрущ",
    ratingPoint: 1000,
    schoolPoint: 990
  },
  {
    name: "Татьяна",
    surname: "Капустник",
    ratingPoint: 650,
    schoolPoint: 500
  },
  {
    name: "Максим",
    surname: "Меженский",
    ratingPoint: 990,
    schoolPoint: 1100
  },
  {
    name: "Денис",
    surname: "Марченко",
    ratingPoint: 570,
    schoolPoint: 1300
  },
  {
    name: "Антон",
    surname: "Завадский",
    ratingPoint: 1090,
    schoolPoint: 1010
  },
  {
    name: "Игорь",
    surname: "Куштым",
    ratingPoint: 870,
    schoolPoint: 790
  },
  {
    name: "Инна",
    surname: "Скакунова",
    ratingPoint: 1560,
    schoolPoint: 200
  }
];

let id = 1;
const listOfStudents  = [];
const studentsOnBudget = [];
class Student{
    constructor(enrollee){
        this.id = id++; 
        Object.assign(this, enrollee);
        if (this.ratingPoint< 800){
            this.isSelfPayment = true;

        }else{
            this.isSelfPayment = false;
            studentsOnBudget.push(this);
            studentsOnBudget.sort(
                function(a, b) {          
                if (a.ratingPoint === b.ratingPoint) {
                    return a.schoolPoint - b.schoolPoint;
                }
                return a.ratingPoint > b.ratingPoint ? 1 : -1;
                });

            if (studentsOnBudget.length >5){

                for(let i=0; i<listOfStudents.length; i++){
                    if(studentsOnBudget[0] == listOfStudents [i]){
                        listOfStudents [i].isSelfPayment = true;
                    }

                } 
                studentsOnBudget.splice(0,1);
                
            }
        }
        listOfStudents .push(this);

    }
    static listOfStudents(){
        return listOfStudents ;
    }
}
const enrollee1 = new Student(studentArr[0]);
const enrollee2 = new Student(studentArr[1]);
const enrollee3 = new Student(studentArr[2]);
const enrollee4 = new Student(studentArr[3]);
const enrollee5 = new Student(studentArr[4]);
const enrollee6 = new Student(studentArr[5]);
const enrollee7 = new Student(studentArr[6]);
const enrollee8 = new Student(studentArr[7]);
const enrollee9 = new Student(studentArr[8]);
const enrollee10 = new Student(studentArr[9]);
const enrollee11 = new Student(studentArr[10]);

console.log(studentsOnBudget);

// Инна, Антон, Станислав, Сергей, Анна