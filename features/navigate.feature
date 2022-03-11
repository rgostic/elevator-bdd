Feature: Navigate to floor

Background:
    Given the elevator has seven floors
    And the elevator has no basement
    And the passenger is on the second floor
    And the elevator is on the second floor

Scenario: Passenger navigates elevator to different floor
    Given the passenger calls the elevator    
    When the passenger navigates to the third floor
    Then the passenger should be on the third floor
    And the elevator should be on the third floor

Scenario: Passenger navigates elevator to same floor
    Given the passenger calls the elevator
    When the passenger navigates to the second floor
    Then the passenger should be on the second floor
    And the elevator should be on the second floor