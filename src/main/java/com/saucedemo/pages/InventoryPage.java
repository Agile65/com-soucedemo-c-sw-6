package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class InventoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(InventoryPage.class.getName());

    public InventoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(className ="title" )
    WebElement productsText;
    @CacheLookup
    @FindBy(xpath="//img[starts-with(@class,'inventory_item_img')]")
    List<WebElement> productList;

    public String getProductText(){
        log.info("Getting text from : " + productsText.toString());
        return getTextFromElement(productsText);
    }
    public String findActualNumberOfProducts(){
        log.info("Getting text from : " + productList.toString());
        List<WebElement> productList=webElementList(By.xpath("//img[starts-with(@class,'inventory_item_img')]"));
        int size=productList.size();
        return String.valueOf(size);
    }
}
