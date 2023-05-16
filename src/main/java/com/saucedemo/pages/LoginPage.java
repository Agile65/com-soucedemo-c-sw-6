package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id ="user-name")
    WebElement userNameField;
    @CacheLookup
    @FindBy( id="password" )
    WebElement passwordField;
    @CacheLookup
    @FindBy( id="login-button" )
    WebElement loginButton;

    public void enterUserName(String userName){
        sendTextToElement(userNameField,userName);
        log.info("Clicking on login link : " + userNameField.toString());
    }

    public void enterPassword(String password){
        sendTextToElement(passwordField,password);
        log.info("Clicking on login link : " + passwordField.toString());
    }

    public void clickOnLoginButton(){
        clickOnElement(loginButton);
        log.info("Clicking on login link : " + loginButton.toString());
       }
}
