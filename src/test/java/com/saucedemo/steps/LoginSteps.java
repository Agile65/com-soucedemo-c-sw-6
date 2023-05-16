package com.saucedemo.steps;

import com.saucedemo.pages.InventoryPage;
import com.saucedemo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class LoginSteps {

    //1. userShouldLoginSuccessfullyWithValidCredentials
    //* Enter “standard_user” username
    //* Enter “secret_sauce” password
    //* Click on ‘LOGIN’ button
    //* Verify the text “PRODUCTS”

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String userName) {
        new LoginPage().enterUserName(userName);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see text \"([^\"]*)\"$")
    public void iShouldSeeText(String textProduct)  {
        Assert.assertEquals(textProduct,new InventoryPage().getProductText(),"Error");
    }

    //2. verifyThatSixProductsAreDisplayedOnPage
    //* Enter “standard_user” username
    //* Enter “secret_sauce” password
    //* Click on ‘LOGIN’ button
    //* Verify that six products are displayed on page
    @Then("^I can see products \"([^\"]*)\"$")
    public void iCanSeeProducts(String productListSize)  {
        System.out.println(productListSize);
        System.out.println(new InventoryPage().findActualNumberOfProducts());
        Assert.assertEquals(productListSize, new InventoryPage().findActualNumberOfProducts(),"Error");
    }

}
