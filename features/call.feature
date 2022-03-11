Feature: Call to floor

Background:
    Given there are five floors
    And there is a single-floor basement

Scenario: Passenger on the ground floor calls elevator on the top floor
    Given the passenger is on the ground floor
    And the elevator is on the top floor
    When the passenger calls the elevator
    Then the elevator should arrive on the ground floor

Scenario: Passenger calls elevator from the same floor
    Given the passenger is on the second floor
    And the elevator is on the second floor
    When the passenger calls the elevator
    Then the elevator should still be on the second floor