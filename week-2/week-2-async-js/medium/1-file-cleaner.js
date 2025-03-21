// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

fs.readFile("./medium/a.txt", "utf-8", function(err,data){
    data = data.replace(/\s+/g,' ')
    fs.writeFile("./medium/a.txt", data, function(){
        console.log("removed extra spaces from the text file")
    });
})


