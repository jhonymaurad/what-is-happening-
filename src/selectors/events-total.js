export default function selectExpensesTotal (expensesArr) {
  let total = 0;
  for (let i = 0; i < expensesArr.length; i++) {
    total += expensesArr[i].amount;
  }

  return total;
}
