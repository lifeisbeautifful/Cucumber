Feature: Add items to cart
  Tests adding items to cart

  Rule: Test Scenario Outline and asterisc instead of given, when keywords

    Background:
      Given User is navigated to home page

    @not
    Scenario Outline: Add to cart
      * Items catalog is opened
      When "<item>", "<subitem>" are selected
      Then User is navigated to "<url>"

      Examples:
        | item                  | subitem           | url                                        |
        | Смартфони та телефони | Останні новинки   | https://allo.ua/ua/products/mobile/new-da/ |
        | Аудіо                 | Навушники по типу | https://allo.ua/ua/naushniki/              |
