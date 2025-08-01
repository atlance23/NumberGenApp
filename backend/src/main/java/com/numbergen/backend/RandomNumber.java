package com.numbergen.backend;

public class RandomNumber {
    private int generatedNumber;

    public void setRandomNumber() {
        this.generatedNumber = (int) (Math.random() * 100); // Generates a random number between 0 and 99
    }

    public int getGeneratedNumber() {
        return generatedNumber;
    }
}
