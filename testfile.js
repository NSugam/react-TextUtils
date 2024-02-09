
    function hello(){
        console.log("Hello World");
    }

    // Normal function 
    let obj2 = {
        func: function myfunction(number) {
            console.log("The number is " + number)
        }
    }
    obj2.func(5)


    // Arrow function 
    let obj =  {
        a:5,
        b:10,
        func: (number)=> {
            console.log("The number is " + number);
        }
    }
    obj.func(5)


    // callout function
    setTimeout(() => {
       console.log("This is automatic callout function. It fires callback after 3 second."); 
    }, 1000);
    console.log("Execution won't stop for callout function timer. Is is asynchronous");



    // Event Listener 
    document.addEventListener("click", function click(){
        console.log("Clicked");
        let conf = confirm("Are you sure");
        console.log(conf);
    })

    // For-each loop in JS 
    arr = [1,2,3,4,5]
    arr.forEach(Element => {
        console.log(Element);
    });
