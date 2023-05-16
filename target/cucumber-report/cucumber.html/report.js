$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to login into saucedemo website",
  "description": "",
  "id": "as-a-user-i-want-to-login-into-saucedemo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 4268422199,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "as-a-user-i-want-to-login-into-saucedemo-website;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter email \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see text \"Products\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 156683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 178936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 89830899,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 144751700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 19
    }
  ],
  "location": "LoginSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 70766700,
  "status": "passed"
});
formatter.after({
  "duration": 871563699,
  "status": "passed"
});
formatter.before({
  "duration": 1620422799,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that six products are displayed on page",
  "description": "",
  "id": "as-a-user-i-want-to-login-into-saucedemo-website;verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"standard_user\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can see products \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 171311700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 102095999,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 102332900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 20
    }
  ],
  "location": "LoginSteps.iCanSeeProducts(String)"
});
formatter.result({
  "duration": 81647601,
  "status": "passed"
});
formatter.after({
  "duration": 772306900,
  "status": "passed"
});
});