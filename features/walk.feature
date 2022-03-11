Feature: Walk through elevator door

Background:
    Given the elevator has seven floors
    And the elevator has no basement

Scenario: Passenger walks into elevator
    Given the passenger is on the second floor
    And the passenger is outside of the elevator
    And the elevator is on the second floor
    When the passenger walks through the elevator door
    Then the passenger should be inside of the elevator