// // Ashxatanq teqsteri het
// let myCountry = "ErroringCase"; //popoxakanneri nshanakum
// console.log("Bari galusht Garniki cragir");
// console.log("Hello".toUpperCase()); //mexatar sax
// console.log("Hello".toLowerCase()); // poqratar sax
// console.log("Hello my progs" .substring(9-11));
// console.log("Hello " + myCountry + " Progs");
// //popoxakanner tveric
// let num1 = 20;
// let num2 = 50;
// console.log(num1+num2);
// let Name = "Garnik"; 
// const theyear = 2021; // hastatunner
// console.log(theyear);
// let mytext = `my name is ${Name}`;
// console.log(mytext);


// //bulianner
// let bool1 = true;
// let bool2 = false;
// let isLogedIn = false;

// console.log(5<6);

// //nuller
// let num1 = null;
// let texting = "GRRG";
// let bool = true;
// let num2 = 5;
// console.log(typeof(bool));

// // //array zangvac
// // let array1 = ["USA", "China", "Russian", "Armenia"];
// // console.log(array1);
// // let numarray = [2018,2019,2020,2021];
// // console.log(numarray);
// // let arraylog = ["Garnik", 2021, true, null, "Progs"];
// // console.log(arraylog);
// // console.log(arraylog[2]);//poxel arjeqneric meky
// // arraylog[2] = "false"; // poxel zangvaci arjeqneric meky
// // console.log(arraylog);

// // arraylog.push("GarnikiCragirCash"); // avelacner zangavaci tarr
// // console.log(arraylog);

// // arraylog.unshift("ShiftPort22"); // avelacnel element skzbic
// // console.log(arraylog); 

// // let element = arraylog.pop(); // jnjel verjin elementy
// // console.log(element);
// // console.log(arraylog);

// // console.log(arraylog.indexOf("Progs")); // cuyc tal tarri indexy grelov anuny

// let arr = [ // zangvaci mej 2zangvac
//     ["Arman", "Garik", "Mark", "Levon"],
//     ["Ani", "Liana", "Karine", "Srbuhi"]
// ];
// console.log(arr);
// // console.log(arr[0]);//tpel arajini tarrery
// // console.log(arr[1]);//tpel erkrordi tarrery
//  let fullarr = arr[0] .concat( arr[1]); // tpel mek yndhanur zangavci mej
// console.log(fullarr);



// // dictionaries banaliner
// let dict = {
//     microsoft:1950, // ynkerutyan anvanum heto stexcman taretiv
//     ibm:1956,       // taretivy value e , aysinqn arjeq
//      amazon:[2000,"Jeff", "USA",],//tpum e zangvaci tesqov
//     facebook:{  // karox enq shat tvyal pahel value um
//     year: 2001,
//     owner:"Mark",
//     country: "USA"
//     }
// }
// // console.log(dict); //tpum e amboxj informacian
// // console.log(dict.microsoft);  // tpum e microsofti taretivy
// // console.log(dict.facebook.owner); // tpel fbi stxcoxin
// // console.log(dict.amazon[2]); // tpum e zangvaci 2 tarry
// dict.google = 1988;
// console.log(dict);


// // loops
// let arr = ["USA", "China", "Russian", "Armenia"];

// for(let i = 0; i<10; i++ ) // 0-9 tvery tpel
// {
//     console.log(i);
// }
// for(let i = 0; i<=10; i++ ) // 0-10 tvery tpel
// {
//     console.log(i);
// }
// for(let i = 0; i<arr.length; i++)// tpel zangvaci elementnery cikleri mijocov
// {
//     console.log(arr[i]);
// }
// for(let country of arr) // tpelu dzev
// {
//     console.log(country);
// }

//while cikl

// let i =0;
// while(i <= 10)
// {
//     console.log(i);
//     i++;

// }
//  
// if (8 < 5)
// {
//     console.log("Correct");
// }
// else 
// {
//     console.log("Wrong");
// }

// if (i == 5)
// {
// {
//     i++;
//     continue;
// }else 
// {
//     console.log("Wrong");
// }
// }

// ////////////////////////////////////////////

// console.log("For home page press 1");
// console.log("For home page press 2");
// console.log("For home page press 3");
// console.log("=====================");
// let progs = 8;
// switch(progs)
// {
//     case 1:
//         console.log("Go to page 1");
//         break;

//     case 2:
//         console.log("Go to page 2");
//         break;

//     case 3:
//         console.log("Go to page 3");
//         break;

//     default:
//         console.log("Wrong Progs");
// }

//funkcianer

// function progs (full) 
// {
//     console.log("Progs LLC" + full);
// }
// progs(" Garnik");

//funkcianer

// function progs (full, all) 
// {
//     console.log("Progs LLC "+ full +" Director Company "+ all  );
// }
// progs("Virtual Host" , "Garnik Mkrtchyan");
// progs ("DeltaPlus+" , "Liana Hambaryan");

// //tveri gumar
// function num(num1 , num2)
// {
//     return num1 + num2
// }

// let total = num(10,25);
//  console.log(total);
//////////////////////////////
//obyekt koxmnoroshvac cragravorum
//akauntnerri bacum
class Account
{
    constructor(firstName, lastName, email, password)
    {
        this.first_name = firstName;
        this.last_name = lastName;
        this.email = email;
        this.password = password;
    }
    getInfo ()
    {
        console.log(`
            First Name is ${this.first_name}\n
            Last Name is ${this.last_name}\n
            Email is ${this.email}

            `
        );
    }
    getFullName()
    {
        return this.first_name+ " - "+this.last_name;
    }
}
let account1 = new Account("Garnik","Mkrtchayn","garnik.mkrtchyan1@mail.ru", "33633658");
// console.log(account1);
let fullName = account1.getFullName();
console.log(fullName);
account1.getInfo();
