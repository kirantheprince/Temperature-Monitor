#Temperature Monitor -  JavaScript/SPA

## Guidelines 

 Build a Temperature Monitor Single Page Application (SPA) using Angular.

**User Story #1**
As an anonymous end user, I want to be able to enter any number of temperture records by entering a value and then clicking on the "Add" button.

**User Story #2**
As an anonymous end user,  When I click on the "Get Media Temperture" button, I want to be able to see the median of the entered tempertures records that I have entered.

**User Story #3**
As an anonymous end user, I want to be prevented from entering invalid value such as a strings in the "temprature" field.
The UI should inform me that I tried an invalid action.


**Technical Tasks**
- For user story #1 and #2. Create a javascript object (or an Angular service) named "TemperatureMonitor". 
- This object MUST have a method named "recordTemperature" that will accept a number value.
- This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values.
- This object MUST be easily reusable and have no coupling with the UI
- Use this TemperatureMonitor object in the Angular SPA.
- The Code that calculates the median MUST be your own (no libraries allowed)
- The Code that calculates the median MUST be covered by Unit Tests (As much as you feel necessary to ensure good code quality)
- Twitter Bootstrap CSS is already included in the index file, use it at will


