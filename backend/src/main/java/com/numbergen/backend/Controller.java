package com.numbergen.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/generate")
    public String generateNumber() {
        RandomNumber randomNumber = new RandomNumber();
        randomNumber.setRandomNumber();
        return "{\"number\": " + Integer.toString(randomNumber.getGeneratedNumber()) + "}";
    }
    
}
