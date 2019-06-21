class Worker {
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }  
}
  
class Employee extends Worker {
  constructor(name, salary){
    super(name,salary)
  }
}
  
class Manager extends Worker{
  constructor(name, salary, bonus){
    super(name, salary)
    this.bonus = bonus;
  }
}
  
class Company {
  constructor() {
    this.members = [];
  }

  addEmployees(){
    this.members.push(...arguments);
  }
    
  get healthFund() {
    return this.members
    .map((worker) => worker.salary * 0.04)
    .reduce((acc, health) => (acc + health));
  }
   
  get retirementFund() {
    return this.members
    .map((worker) => worker.salary * 0.08)
    .reduce((acc, retirement) => (acc + retirement));
  }

  generatePayroll(){
    this.totalPayment = this.members
    .map(worker => worker.salary * 0.88)
    .reduce((acc, payment) => (acc + payment));
    
    this.totalBonus = this.members
    .filter(worker => worker.constructor.name === 'Manager')
    .map(worker => worker.bonus)
    .reduce((acc, bonus) => (acc + bonus))
            
    return this.totalPayment + this.totalBonus;
  }
    
}
    
// company.healthFund;
// company.retirementFund;


  const e1 = new Employee("Pedro", 2300);
  const e2 = new Employee("Pablo", 3500);
  const m1 = new Manager("Maria", 5000, 2500);


  const company = new Company();
  company.addEmployees(e1, e2, m1);
  console.log('paym1', company.generatePayroll()); // 2024 + 3080 + 6900 = 12004
  
  console.log('health1', company.healthFund); // 92 + 140 + 200 = 432
  console.log('retirement1', company.retirementFund); // 184 + 280 + 400 = 864
  
  console.log('paym2', company.generatePayroll()); // 12004
  console.log('health2', company.healthFund); // 432 + 432 = 864
  console.log('retirement2', company.retirementFund); // 864 + 864 = 1728