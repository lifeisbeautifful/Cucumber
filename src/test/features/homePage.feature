Feature: Cart
Test Cart options

  Background:
    Given User is navigated to home page

  @simple
  Scenario: Check cart button
    Given Cart item is present on home page

  @simple
  Scenario: Check account button
    Given Account button is present on home page
