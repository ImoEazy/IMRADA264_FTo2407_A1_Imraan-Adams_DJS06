// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//exercise 1 - forEach Basics:
//log each name and each province separately
names.forEach(name => console.log(name)); //logs each name 
provinces.forEach(province => console.log(province)); //logs each province

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
}); //logs names with matching provinces in the format "Name (Province)"

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. ForEach basics
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//2. Uppercase transformation
console.log(provinces.map(provinces => provinces.toUpperCase()));