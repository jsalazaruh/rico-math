### Ricomath

Ricomath is a math game focused on enhancing speed of arithmetics. It was completed with the use of HTML, CSS, Boostrap, Javascript and JQuery. There are four different operations for which the user can enhance their arithmatic skills. Soon after selecting the operation, the user will be directed to the configurations page. The ability to enter the amount of questions the operator wishes to answer are one of the options; as well as, the amount of time being given & the range of digits of the questions. The timer will start one second after the click of the thumbs up button. This was implemented with the user in mind to give the user a small amount of time to get prepared for the questions. As the questions are being answered, the user will see a red line on top of the questions page. This will provide the remainder of time that they have in order to finish the quantity of questions have given. When the timer runs out of time, it will automatically redirect the current page to the finishing page displaying the percentage of how many questions the user got correct. Below this information, the user will have the option to restart the session with the same configuration. The home button will direct them to the beginning of the settings options. 

## Home Page
![Home Page](https://user-images.githubusercontent.com/25919226/69515616-c198ca80-0f14-11ea-99ff-438c31a7abcd.png)

This is the landing page when connecting to ricomath.com. The buttons throughout the entire web applicaiton are implemented using bootstrap. On the top right page, the user will see the 'ABOUT' button which will provide the people involved in developing this application. 

## About Page
![About Page](https://user-images.githubusercontent.com/25919226/69515687-fdcc2b00-0f14-11ea-8805-b01fff46e0b4.png)

This page serves as the credit page for the entire web application. The home & about page are static pages in order to guide the user through the flow of operations. 

## Operation Page
![Operation](https://user-images.githubusercontent.com/25919226/69515710-12102800-0f15-11ea-8de1-a8f257976983.png)

The user will be met with a total of five buttons in this page. The top left will be signifying the 'BACK' button which will redirect them to the home page. The rest of the four buttons are integrated to take the selection of the users operations. The selction will be saved in localstorage with the purpose of extracting the data and creating the questions. 

## Configuration Page
![Config](https://user-images.githubusercontent.com/25919226/69515732-27855200-0f15-11ea-9f2e-d6dfc7f4ac54.png)

The first text box will be used to create the quantity of questions that the enduser will be iterating through. The second options is the amount of time that they will have in order to finish the total amount of questions. The third selection is the range in which the questions will be given. Only the second number will change when manipulating the slider. This will give you a range of 0 - 40. This will not account for reminders. It will NOT provide whole numbers if they choose to select division. The developer integrating this will need to create the logic in order to create questions with no remainders. The final revision accounts for this issue and has been updated to display only questions with solutions with no remainders. When they are satified with the configurations, clicking the thumbs up button will trigger the start of the web application.

## Problems Page
![Problems](https://user-images.githubusercontent.com/25919226/69515743-38ce5e80-0f15-11ea-98bb-80e2a822f441.png)

Questions Page will display a red line that will continuously increase with every second passing. The options to look at the countdown timer has also been implemented. This is being implemented with the use of setInterval. Current questions will change after the keypress of the 'Enter Key'. The input of the problems will be able to take blank answers but will automatically count them wrong. The finalized version has implemented a cancel button along with, the number of the question currently being answered.  

## Final Page
![Final](https://user-images.githubusercontent.com/25919226/69515778-48e63e00-0f15-11ea-805e-440a6770844e.png)

When the time runs out or the user has completed answering all of the questions, the will be prompted with the 'RESULTS'. This page will contain the percentage of the questions right/total. They will also have the ability to see how many questions they got right out of the total number of questions attempted. Below that, there will be two buttons. The blue button will reset the current session and will give them the ability to try again. The green button will redirect the user back to the selection of the operations page. 

# Afterword
I would like to point out that the page live right now in ricomath.com, is currently a version of this project with more features that will provide more flexibility for the questions being given. This repository serves as a foundation to start a web application in order to create an arithmatic quizzing game. The finalized revision of ricomath is copyrighted. 

Good luck on your development & don't forget to have fun!!!
