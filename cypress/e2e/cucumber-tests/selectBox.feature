Feature: Select Box

  As a user
  I select JavaScript Api option from select box

  Scenario: Select Box
    Given I open basePage
    When I select "JavaScript API" from selectBox
    Then I see "JavaScript API" in selectBox
