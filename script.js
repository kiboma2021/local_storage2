const car = {
  color:'red',
  wheels: 4
}

const convertedtoJson=JSON.stringify(car);

localStorage.setItem('login',convertedtoJson);

const data=localStorage.getItem('login');

const 