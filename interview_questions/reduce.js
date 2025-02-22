const transactions = [
    { type: 'income', category: 'Salary', amount: 5000 },
    { type: 'expense', category: 'Food', amount: 50 },
    { type: 'expense', category: 'Entertainment', amount: 100 },
    { type: 'income', category: 'Freelance', amount: 300 },
    { type: 'expense', category: 'Food', amount: 30 },
    { type: 'income', category: 'Salary', amount: 2000 },
    { type: 'expense', category: 'Entertainment', amount: 150 }
  ];

const grouped = transactions.reduce((accumulator , transaction)=>{
    const {type, category, amount } = transaction;
    if(!accumulator[category]){
        accumulator[category] = {income:0, expense:0};
    }
    if(type==="income"){
        accumulator[category].income += amount  
    }
    else if(type==="expense"){
        accumulator[category].expense += amount  
    }
    return accumulator;
})

console.log(grouped)