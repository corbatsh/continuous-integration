Feature: Submit form

  As a user
  I can fill and submit developer name

  Scenario: Submit form
    Given I open basePage
    When I fill developer name
    And I click the checkbox "I have tried TestCafe"
    And I click submit button
    Then I see Thank You header