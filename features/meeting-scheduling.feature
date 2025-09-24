Feature: Client Management

  Scenario: Add a new client successfully
    Given I am on the client registration page
    When I enter valid client details
      | name          | John Doe          |
      | email         | john@example.com  |
      | address       | 123 Main St       |
      | password      | secret123         |
      | repeatPassword| secret123         |
    And I submit the registration form
    Then I should see "Client added successfully!"
    And the client "John Doe" should appear in the client list

  Scenario: List all clients
    Given clients exist in the system
    When I view the client list page
    Then I should see a list of clients including "John Doe" and "Jane Smith"
