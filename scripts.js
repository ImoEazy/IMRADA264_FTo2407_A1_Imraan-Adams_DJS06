//1. ForEach Basics
//Objective: Log each name and each province to the console. Then log each name with a matching province in the format "Name (Province)".

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Log each name and each province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//2. Uppercase Transformation
//Objective: Use map to create a new array of province names in all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//3. Name Lengths
//Objective: Create a new array using map that contains the length of each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//4. Sorting
//Objective: Use sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort();  // Spread to avoid modifying the original array
console.log(sortedProvinces);

//5. Filtering Cape
//Objective: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const provincesWithoutCape = provinces.filter(province => !province.includes("Cape"));
console.log(provincesWithoutCape.length);

//6. Finding 'S'
//Objective: Create a boolean array using map and some to determine if a name contains the letter 'S'.
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

//7. Creating Object Mapping
//Objective: Use reduce to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

//Advanced Exercises (Single console.log Execution)

//1. Log Products
//Objective: Iterate over the products array, logging each product name.

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

console.log(products.map(product => product.product).join(', '));

//2. Filter by Name Length
//Objective: Filter out products with names longer than 5 characters.
console.log(products.filter(product => product.product.length <= 5));

//3. Price Manipulation
//Objective: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
console.log(products.filter(product => product.price.trim() !== '').map(product => parseFloat(product.price)).reduce((acc, price) => acc + price, 0));

//4. Concatenate Product Names
//Objective: Use reduce to concatenate all product names into a single string.
console.log(products.reduce((acc, product) => acc + product.product + ' ', '').trim());

//5. Find Extremes in Prices
//Objective: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const validPrices = products.filter(product => product.price.trim() !== '').map(product => parseFloat(product.price));
const highestPrice = Math.max(...validPrices);
const lowestPrice = Math.min(...validPrices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

//6. Object Transformation
//Objective: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: price });
  return acc;
}, []));









// 1. ForEach basics
//provinces.forEach(province => console.log(province));
//names.forEach(name => console.log(name));
//names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//2. Uppercase transformation
//console.log(provinces.map(provinces => provinces.toUpperCase()));