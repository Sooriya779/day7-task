
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
   
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);

    
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);

    
    console.log("Details of countries:");
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("----------------------");
    });

    
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    
    const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries using US Dollars as currency:", countriesWithUSD);
  })
  .catch(error => console.log("Error fetching data:", error));
