//Q2.Write a JavaScript function named 'display' that takes an argument 'myName'. 
//When 'display' is called with the value 'Lovely Professional', 
//it should print 'FirstName Lovely' and 'LastName Professional' 
//Note: use Destructuring of object

function display(NAME) {
    
    const [firstName, ...lastNameArr] = NAME.split(' ');
    const lastName = lastNameArr.join(' ');

    console.log(`FirstName: ${firstName}`);
    console.log(`LastName: ${lastName}`);
}


display('Lovely Professional');