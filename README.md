# Second Assignment - Parse invoice numbers
I create a programe which will 
* Read file `input_user_story_1.txt` 
* Convert all inputs to number and show them on console
* Read `output_user_story_1.txt` and check that all number are correct or not
* If any number is incorrect show them on console
* If all records are correct It will show message `All results are correct`

## Getting Started - Marco Polo Game
You should have `Node.js` installed in you machine to run this assignment.



## Running and Testing the Project
Open marco-polo-assignment directory from command line and run commands given below:
```
npm run test
```


# When is it a good idea to not use NodeJs? Why? 

We all know that Node.js is a single threaded language. So in case of process which uses much CPU power(math calculation and image resizing etc) we should not use Node.js.
We can use it in simple light weight IO requests for example chat, job queuing etc.
Node.js very useful to handle light concurrent requests.
