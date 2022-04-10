"use strict";

// try, catch, finally, properties

let res = 0;
try {
    res = 5/d;
    console.log(res);

}
catch (error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}