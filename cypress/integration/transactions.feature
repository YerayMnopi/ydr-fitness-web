Feature: Trainings

Scenario: Trainings list
    Given a user who is in transactions screen
    Then the system displays transactions sorted descending by date

Scenario: Create Training
    Given a user who is in transactions screen
    When clicks the create button
    Then the system creates a new training session

Scenario: Trainings empty list
    Given a user who is in transactions screen
    When there are no transactions
    Then the system displays an empty notification message

Scenario: Trainings sorted list
    Given a user who is in transactions screen
    When he tries to sort by date
    Then the system displays transactions sorted ascending by date

Scenario: Trainings filtered list
    Given a user who is in transactions screen 
    When he tries to search a transaction
    Then the system displays matching transactions