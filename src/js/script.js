'use strict';

const costCalculate = function costCalculate(litersOfBorsch) {
  const potatoPerLiter = 4;
  const potatoWeight = 75;
  const priceKg = 13;

  const totalWeightInGrams = litersOfBorsch * potatoPerLiter * potatoWeight;

  const totalWeightInKg = Math.ceil(totalWeightInGrams / 1000);
  const totalCost = totalWeightInKg * priceKg;
  return totalCost;
};
const cost = costCalculate(48);
console.log(`Стоимость картофеля: ${cost} грн. `);
