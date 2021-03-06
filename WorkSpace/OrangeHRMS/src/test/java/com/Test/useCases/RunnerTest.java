package com.Test.useCases;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(	
		plugin ={"pretty","json:src/test/resource/cucumber.json","html:src/test/resource/cucumber",},
		features="src/feature/resource/feature"
				,tags ={"@Login"}
				)
public class RunnerTest {

}
