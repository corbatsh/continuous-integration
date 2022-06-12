Feature: Pick a value on the slider

  As a user
  I pick a value on the slider

  Scenario: Pick a value on the slider
    Given I open basePage
    When I click the checkbox "I have tried TestCafe"
    Then I pick 5 on the slider