$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: swapnilkpillai@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : This is the Login feature file"
    },
    {
      "line": 3,
      "value": "#Feature: Login"
    },
    {
      "line": 4,
      "value": "#Scenario:"
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login to the application",
  "description": "",
  "id": "login-to-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 22,
  "name": "Login to the Application",
  "description": "",
  "id": "login-to-the-application;login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enter Username",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter Password",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationLogin.open_the_URL()"
});
formatter.result({
  "duration": 14513773013,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationLogin.enter_Username()"
});
formatter.result({
  "duration": 131672701,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationLogin.enter_Password()"
});
formatter.result({
  "duration": 171931245,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationLogin.click_Login_Button()"
});
formatter.result({
  "duration": 4045633456,
  "status": "passed"
});
});