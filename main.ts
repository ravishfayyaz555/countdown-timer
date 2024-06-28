import inquirer from "inquirer";
  const response = await inquirer.prompt(
    [
        {
            name : "targetDate",
            type : "datetime" ,
            message : "choose your target date and time ",
            format : ["yyyy" , "mm" , "dd" , "" , "hh" , ":" , "MM"],
            initial : new Date(),

        },
    ]
  );

  let dateOb = new Date();
  let dateob = new Date();

//   current date
//   adjust 0 before single digit date
let dates = ("0" + dateob.getDate()).slice(-2);

// current mounth
let months = ("0" + (dateob.getDate() + 1)).slice(-2);

// current year
let years = dateob.getFullYear();

// current hours
let hours = dateob.getHours();

// current minutes
let minutes = dateob.getMinutes();

// current seconds
let seconds = dateob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(years + "-" + months + "-" + dates);

// prints date in YYYY-MM-DD  HH:MM:SS format
console.log(years + "-" + months + "-" + dates + " " + hours + ":" +minutes + ":" + seconds);

// prints time in HH:MM format
console.log(hours + ":" + minutes);

let tS = Date.now();

// timestamp in millisecond
console.log(tS);

// timestamp in seconds
console.log(Math.floor(tS/1000));

let ts = Date.now();


let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth()+ 1;
let year = date_ob.getFullYear() ;

// prints date & time in YYYY-MM-DD format
console.log(years + "-" + month + "-" + date);


 