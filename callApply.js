const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Ahmed',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargingBill: function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName:'Balam',
    lastName:'Hero',
    salary:25000
}
const friendlyPerson = {
    firstName: 'Golam',
    lastName: 'hero',
    salary: 25000
}
// normalPerson.chargingBill();

// const heroChargingBill = normalPerson.chargingBill.bind(heroPerson);
// heroChargingBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargingBill = normalPerson.chargingBill.bind(friendlyPerson);
// friendlyChargingBill(2000);

// normalPerson.chargingBill.call(heroPerson, 1000);
// normalPerson.chargingBill.call(friendlyPerson, 3000, 100, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargingBill.apply(heroPerson, [3000, 400, 600]);

console.log(heroPerson.salary);