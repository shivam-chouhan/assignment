const iP = require('readline');
const calculate = iP.createInterface({ input : process.stdin,
                                output : process.stdout});
calculate.question('Enter "1" for addition Enter "2" for substraction Enter "3" for multiplication "4" for divide \n',
(option)=> {
            if(option == 1)
            {
                calculate.question('enter the first numbers \n',
                (userInput1)=>{
                    calculate.question('enter the second number\n',
                    (userInput2)=>{
                        var ans = (+userInput1) + (+userInput2);
                        console.log(ans);
                        calculate.close();
                    
                    })

                })
            }
            else if(option == 2 )
            {
                calculate.question('enter the first number\n',
                (userInput1)=>{
                    calculate.question('enter the second number\n',
                    (userInput2)=> {
                        var ans = (+userInput1) - (+userInput2);
                        console.log(ans);
                        calculate.close();
                    })
                })
            }
            else if(option == 3)
            {
                calculate.question('enter the first number \n',
                (userInput1)=> {
                    calculate.question('enter the second number\n',
                    (userInput2)=>{
                        var ans = (+userInput1) * (+userInput2);
                        console.log(ans);
                        calculate.close();
                    })
                })
            }
            else if(option == 4)
            {
                calculate.question('enter the first number \n',
                (userInput1)=> {
                    calculate.question('enter the second number\n',
                    (userInput2)=> {
                        var ans= (+userInput1) / (+userInput2);
                        console.log(ans);
                        calculate.close();
                    })
                })
            }

        else
           {
               console.log('wrong input');
               calculate.close();
           }
})                                