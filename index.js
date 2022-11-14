const newTaskNameInput = document.querySelector('#TicketBooking');
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})
option.forEach(a => {
	a.addEventListener('click', b => { 
		b.target.parentElement.classList.remove('toggle');
		const parent = b.target.closest('.select').children[0];

		parent.setAttribute('data-type', b.target.innerHTML);

		parent.innerHTML = b.target.innerHTML;
	})
});
$( function() {
    $( "#sourcedatepicker" ).datepicker();
	$( "#destinationdatepicker" ).datepicker();
} );
let username=document.getElementById("new").value;
                 
                 if (username== "null" || username == "")
                        {
                           alert( "enter correctname");
                           return false;
                        }

           let mymail=document.myform.myemail.value;
           let attherate=mymail.indexOf("@");
           let atthedot=mymail.lastIndexOf(".");

           if (attherate<1 || atthedot<attherate+2 || atthedot>=mymail.length)
                  {
                     alert( "enter the correct email");
                     return false;
                  }
                  let mobile1=(document.myform.mobile.value)

if (mobile1.length==10)
    {
       return true
    }
 else      
        {
          alert( "enter the correct 10 digits number");
          return false;
       }

