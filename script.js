//1. Convert the following identifiers to Camel Case notation:
var aSomeMonth;		//var some_month;
function fnTheMonth () {} ;		//function theMonth function to return currentMonth
const constCurrentMonth = aSomeMonth;		// current-month a constant
var aSummerMonth = [1,2,3,4,5,6,7,8,9,10,11,12];		//var summer_month an array of summer months
function fnMyLibraryAFunction (){}; 	//MyLibrary-afunction a function 

//2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

/*2016				numeric literal expression
 "New year"			string literal expression
 true				boolean literal expression
 null				null literal expession*/

//3. Give me two examples of complex/variable expressions.
var aSomeYear, aCurrentYear;
var aResult = (100/2) + (4*2);
var aNumberOfYears = aSomeYear - aCurrentYear; 

//4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation to accomplish this task.
var aFirstName; /* var strFirstName */
var aLastName;
var strAddress;
var aCity;
var aState;
var iZipCode;
var iYourAge; /* numYourAge*/
var aReferral;
var aSource;
var strMayWeContactYou;

//5. Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
var aFirstName, aLastName;
aFirstName = "Estela";
aLastName  = "Aliaga";
var strAddress='123 ABCD', aCity='San Diego', aState = 'CA';
var iZipCode = 92101;
var iYourAge;
iYourAge= 25;
var bReferral;
bReferral = false;
var aSource;
aSource = "Google";
var bMayWeContactYou;
bMayWeContactYou = true;

//6. Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 
var strItem = "Chocolate Cake"
var aTotal = 150
console.log("The final total for " + strItem + " is $ " +aTotal);

//7. Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.
var aTotal = 150
console.log("The final total for " + strItem + " is $ " +aTotal);
var strItem = "Chocolate Cake"

/*8. Is the following string literal valid? If not, how would you fix it?
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
console.log(someString);*/
var someString = 'Who once said, Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.';
console.log(someString);

//9. Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.
var aEmpty1 = "null";
var aEmpty2 = "undefine";
console.log (aEmpty1);
console.log (aEmpty2);

//10. Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
var aSummerMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
typeof aSummerMonth;
var arList = [7,5,9,2];
typeof(arList);

/*11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.*/

//alert ("Hello Zak Ruvalcaba, welcome to the JavaScript class!" + "Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma")

//12. Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

/*var aName = "Estela";
alert ("Hello, " + aName + " welcome to the JavaScript class!" + "Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma")*/

//13. Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

/*var aName = "Estela";
var aCourse = "JavaScript";
alert ("Hello, " + aName + " welcome to the " + aCourse + " class!" + "Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma")*/

/*14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
Hello Zak Ruvalcaba.
Welcome to the JavaScript class!*/

//alert ("Hello Zak Ruvalcaba.\nWelcome to the JavaScript class!")

//15. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 
/* var aCourse = "JavaScript";
var aName = window.prompt ("Enter your name here:", "Your Name");
alert ("Hello, " + aName + " welcome to the " + aCourse + " class!" + "Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma")*/

//16. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

/*var aName = window.prompt ("Enter your name here:", "Your Name");
var aCourse = window.prompt("Enter your class here:", "Your Class");

alert ("Hello, " + aName + " welcome to the " + aCourse + " class!" + "Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma")*/

//17. Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window.
/*var x;
var y;
x = 10;
y = 20;
var aResult = (x + y);
alert (aResult);*/

//18. Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.
/*var x = 20;
var aResult = x + 20;
alert (aResult);*/

//19. Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
/*var x = 20;
var aResult = x * 5;
alert (aResult);*/

//20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
/*var x = 20 % 3;
var aResult = x / 1;
alert (aResult);*/

//21. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
/*var x = 1;
var y = 2;
alert (x != y);*/

//22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
/*var x = 3;
var y = +x;
window.console.log(y == 5);*/

//23. Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.
/*var widget = new Object();
window.console.log(typeof widget);*/

//24. Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

/*var aNumber = [10,20,30];
var aResult = aNumber instanceof Array;
window.console.log(aResult);*/

//25. Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.
var aNumber = [10,20,30];
var aResult = aNumber instanceof String;
window.console.log(aResult);