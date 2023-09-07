class Friends {
    constructor(name, father ,age){
    this.name = name;
    this.father = father;
    this.age = age;

    }

    getName(){

        return this.name
    }

    getFather(){
        return this.father
    }

    getAge(){
    return this.age
    }
}

// Instance

setTimeout(function(){
    const friends = new Friends('Name ', 'Father', 'Age')
    console.log(friends.getName(), friends.getFather(), friends.getAge())

setTimeout(function(){
    const awais = new Friends('Awais', 'Ashraf', 30);
    console.log(awais.getName(), awais.getFather() ,awais.getAge());

}, 1000)
  
setTimeout(function(){
    const tahir = new Friends('Tahir', 'Ashraf', 33);
    console.log(tahir.getName(), tahir.getFather() ,tahir.getAge());

},1500)

setTimeout(function(){
    const nabeel = new Friends('Nabeel', 'Aqeel', 29);

    console.log(nabeel.getName(), nabeel.getFather() ,nabeel.getAge());
},2000)

setTimeout(function(){
    const rameez = new Friends('Rameez', 'Akram', 34);
    console.log(rameez.getName(), rameez.getFather() ,rameez.getAge());

},2500)
setTimeout(function(){
    const haris = new Friends('Haris', 'Akhter', 31);
    console.log(haris.getName(), haris.getFather() ,haris.getAge());

},3000)
setTimeout(function(){
    const bilal = new Friends('Bilal', 'Nadeem', 29);
    console.log(bilal.getName(), bilal.getFather() ,bilal.getAge());

},3500)
},500)


// class Student extends Person {
//     getSubjects() {

//     }
// }

// class Teachers extends Person {
//     getClasses() {

//     }
//     getStudents(){

//     }
// }


// class Team{
//     constructor(name, jobTitle, agent){
//        this.name = name;
//        this.jobTitle = jobTitle;
//        this.agent = agent;

//     }

//     getName(){
//         return this.name
//     }
//     getJob(){
//         return this.jobTitle
//     }
// }

// class TeamAgent extends Team{
    
//     getAgent(){
//         return this.agent

//     }
// }
// const haris = new Team('Haris', 'Reviewer');
// const kashan = new Team('Kashan', 'Reviewer');
// const bilal = new TeamAgent('Bilal');

// console.log(haris.getName(), haris.getJob(), bilal.getAgent());
// console.log(kashan.getName(), kashan.getJob());


// class Team{
//     constructor(name){
//       this.name = name;
      
//     }

//     name(){
//         return this.name
//     }

// } 

// const awais = new Team('Faizan');
//  awais.name();
