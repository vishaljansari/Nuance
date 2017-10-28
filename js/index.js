const stateOfUsa = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']  

var sel = document.getElementById('state');
for(var i = 0; i < stateOfUsa.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = stateOfUsa[i];
    opt.value = stateOfUsa[i];
    sel.appendChild(opt);
}

    function checkPhone() {
        var phone = document.forms["form"]["telephone"].value;
        var phoneNum = /\((\d{3})\)|(\d{3})[- ]?(\d{3})[-]?(\d{4})/;
            if(null!=phone.match(phoneNum)) {
                document.getElementById("form").innerHTML="<div class='valid' id='success'><h3>Thank You!</h3><p>Your information was submitted successfully. We will now connect you to the next available chat agent. </p></div>";
            }
            else {
                document.forms["form"]["telephone"].labels[0].textContent+=" - Invalid phone number";
                document.forms["form"]["telephone"].labels[0].className += " invalidlbl";
                document.getElementById("telephone").className += " invalid";
            }
            return false;   // to prevent form from refreshing
    }