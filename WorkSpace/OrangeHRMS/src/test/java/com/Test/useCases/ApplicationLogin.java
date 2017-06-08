package com.Test.useCases;

import com.Test.Configuration.BaseClass;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class ApplicationLogin extends BaseClass{

	@Given("^Open the URL$")
	public void open_the_URL() throws Exception  {
		InitialiseParameter();
	    InitialiseDriver();
	    CallURL(CON.getProperty("ApplictaionURL"));
	 //   throw new PendingException();
	}

	@Then("^Enter Username$")
	public void enter_Username()  {
		Set_Value_In_TextBox("sysadmin ", OR.getProperty("userName"));
	    
	}

	@Then("^Enter Password$")
	public void enter_Password() {
		Set_Value_In_TextBox("sysadmin", OR.getProperty("password"));
	  
	}

	@Then("^Click Login Button$")
	public void click_Login_Button()  {
		Click_Button(OR.getProperty("loginButton"));
	   
	}


}
