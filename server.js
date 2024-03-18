const express = require("express");
const axios = require("axios");

const app = express();

const api1 =
  "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";

const api2 =
  "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";

function createAccount() {
  // • Method: POST
  // • Headers:
  // o Content-Type: application/json
  // • Body: JSON
  // {
  // "name": "Your Full Name", (string)
  // "email": "your_colle@example.com", (string)
  // "rollNumber": Your roll Number, (number)
  // "phone": Your Phone Number (number)
  // }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    name: "Kamakhyaa Kalra",
    email: "kamakhyaa0713.be21@chitkara.edu.in",
    rollNumber: 2110990713,
    phone: 8950460728,
  };

  axios
    .post(api1, data, config)
    .then((response) => {
      console.log(response.data);
      console.log("Account created");
      const accountNumber = response.data.accountNumber;
      console.log({ accountNumber });

      buyStocks(accountNumber);
    })
    .catch((err) => {
      console.log(err.message);
      console.log("API 1 error");
    });
}

function buyStocks(accountNumber) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "bfhl-auth": 2110990713,
    },
  };

  const data = {
    company: "Bajaj Finance Ltd",
    currentPrice: 6544.2,
    accountNumber,
    githubRepoLink: "https://github.com/kamakhyaa10/bajajnew",
  };

  axios
    .post(api2, data, config)
    .then((response) => {
      console.log("Stocks bought");
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Couldn't buy stocks");
      console.log(err.message);
    });
}

createAccount();
