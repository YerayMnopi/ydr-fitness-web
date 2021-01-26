Feature: Transactions

Scenario: Transaction list
    Given a user who is in transactions screen
    Then the system displays transactions sorted descending by date

Scenario: Transaction empty list
    Given a user who is in transactions screen
    When there are no transactions
    Then the system displays an empty notification message

Scenario: Transaction sorted list
    Given a user who is in transactions screen
    When he tries to sort by date
    Then the system displays transactions sorted ascending by date

Scenario: Transaction filtered list
    Given a user who is in transactions screen 
    When he tries to search a transaction
    Then the system displays matching transactions