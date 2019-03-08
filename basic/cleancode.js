// const address = "One Infinite Loop, Cupertino 95014";
// const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
// const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
// const saveCityZipCode = (city, zipCode) => console.log(city, zipCode);
// saveCityZipCode(city, zipCode);


function createMicrobrewery(name = "Hipster Brew Co.") {
    console.log(name);
}

createMicrobrewery();
createMicrobrewery(null);