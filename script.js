function isEmail() {
    var str = document.getElementById("email").value;
    var status = document.getElementById("status");
    var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (re.test(str)) status.innerHTML = "Շնորհակալություն, Մենք կկապնվենք Ձեզ հետ";
      else status.innerHTML = "Շնորհակալություն, Մենք կկապնվենք Ձեզ հետ";
    if(isEmpty(str)) status.innerHTML = "Դաշտը դատարկ է";
   }
   function isEmpty(str){
    return (str == null) || (str.length == 0);
   }

