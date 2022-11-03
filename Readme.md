# RobotICT recruitment solution.

  
  
# Installation:
clone this repo then run:
`meteor` in the project folder.
## Configuration:
Change global default_number_low and default_number_high in:
`RobotICT/imports/ui/App.jsx`

# Brief
Write an application that would go through numbers from 1 to 100. The application should consist of a single page (multiple pages are optional if your design requires them) containing a list (table, plain text, etc.) of words:  
"**Robot**" if the number is divisible by **3**,  
"**ICT**" if the number is divisible by **5**,  
"**RobotICT**" if the number is divisible by **3 and 5**.  
In all other cases, the application should print just the number.  

Add other elements like buttons, links, styles, etc., if your design requires - it's optional but welcomed. The result should be displayed on a page of a running **MeteorJS** application.  

## Additional requirements:  
Write the application in Meteor (https://www.meteor.com/). 
Use either React (https://guide.meteor.com/react.html) or choose Meteor's "native" library for reactive HTML templates – Blaze (https://blazejs.org/) instead (React is preferred).  
 The application should be fully configurable (for example, we can change the range of iteration to <5,95> in the future).  
 The solution should reflect your code hygiene – style, readability, comments, etc  