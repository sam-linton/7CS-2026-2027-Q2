let count = 0;
let cookiesPerSecond = 0;

const buildings = {
  cursor: { amt: 0, baseCost: 10, currentCost: 10, cps: 0.1 },
  grandma: { amt: 0, baseCost: 100, currentCost: 100, cps: 1.0 },
  farm: { amt: 0, baseCost: 1100, currentCost: 1100, cps: 8.0 },
  mine: { amt: 0, baseCost: 12000, currentCost: 12000, cps: 47.0 },
  factory: { amt: 0, baseCost: 130000, currentCost: 130000, cps: 260.0 },
  bank: { amt: 0, baseCost: 1400000, currentCost: 1400000, cps: 1400.0 },
};

function formatNumbers(num) {
  let rounded = Math.floor(num);
  if (rounded >= 1000000000000000000000000000000) {
    return (rounded / 1000000000000000000000000000000).toFixed(2) + " nonillion";
  }
  if (rounded >= 1000000000000000000000000000) {
    return (rounded / 1000000000000000000000000000).toFixed(2) + " octillion";
  }
  if (rounded >= 1000000000000000000000000) {
    return (rounded / 1000000000000000000000000).toFixed(2) + " septillion";
  }
  if (rounded >= 1000000000000000000000) {
    return (rounded / 1000000000000000000000).toFixed(2) + " sextillion";
  }
  if (rounded >= 1000000000000000000) {
    return (rounded / 1000000000000000000).toFixed(2) + " quintillion";
  }
  if (rounded >= 1000000000000000) {
    return (rounded / 1000000000000000).toFixed(2) + " quadrillion";
  }
  if (rounded >= 1000000000000) {
    return (rounded / 1000000000000).toFixed(2) + " trillion";
  }
  if (rounded >= 1000000000) {
    return (rounded / 1000000000).toFixed(2) + " billion";
  }
  if (rounded >= 1000000) {
    return (rounded / 1000000).toFixed(1) + " million";
  }
  return rounded.toLocaleString(); 
}

function clickCookie() {
  console.log('clicked');
  count = count + 1;
  
  let countDisplay = document.getElementById('count-display');
  countDisplay.innerHTML = `${formatNumbers(count)} cookies`;
}

function buyBuilding(type) {
  let item = buildings[type];

  if (count < item.currentCost) return;

  count -= item.currentCost;
  item.amt += 1;
  cookiesPerSecond += item.cps;

  item.currentCost = Math.floor(item.baseCost * Math.pow(1.15, item.amt));

  let countDisplay = document.getElementById('count-display');
  countDisplay.innerHTML = `${formatNumbers(count)} cookies`;

  let cpsDisplay = document.getElementById('per-second-display');
  cpsDisplay.innerHTML = `per second: ${cookiesPerSecond.toFixed(1)}`;
  
  let btn = document.querySelector(`button[onclick="buyBuilding('${type}')"]`);
  btn.innerHTML = `buy a ${type} (${formatNumbers(item.currentCost)} cookies)`;
}

setInterval(() => {
  count += cookiesPerSecond / 10;
  
  let countDisplay = document.getElementById('count-display');
  countDisplay.innerHTML = `${formatNumbers(count)} cookies`;
}, 100);
