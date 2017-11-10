
function openTab(sectionName,tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    var elem= document.getElementById(sectionName);
    elem.style.display = "block";
    document.getElementById(tabName).classList.add('active');

}

document.getElementById('homescreen').addEventListener('click',
  function(){
    openTab('home','homescreen');
  }
);
document.getElementById('homescreen').click();

document.getElementById('login').addEventListener('click',
  function(){
    openTab('signIn','login');
  }
);
document.getElementById('signUp').addEventListener('click',
  function(){
    openTab('createAccount','signUp');
  }
);
document.getElementById('tryNow').addEventListener('click',
  function(){
    openTab('createAccount','signUp');
  }
);
document.getElementById('createAcc').addEventListener('click',
  function(){
    openTab('createAccount','signUp');
  }
);
document.getElementById('room').addEventListener('click',
  function(){
    openTab('roomManagement','room');
  }
);

document.getElementById('account').addEventListener('click',
  function(){
    openTab('accountSettings','account');
  }
);

document.getElementById('forgotPass').addEventListener('click',
  function(){
    openTab('forgotPassword','login');
  }
);

document.getElementById('submitCode').addEventListener('click',
  function(){
    openTab('resetPassword','login');
  }
);

document.getElementById('lecIcon').addEventListener('click',
  function(){
    var ul = document.getElementById("lectures");
    var li = document.createElement("li");
    li.className+="listItem";
    var a= document.createElement("a");
    a.appendChild(document.createTextNode("Lecture"));
    a.addEventListener('click',function(){
      console.log("lalal");
      document.getElementById('lecQuestions').style.display="block";
      document.getElementById('createQuestion').style.display="none";
    });
    li.appendChild(a);
    ul.appendChild(li);
    document.getElementById('guestMng').classList.add('active');
    document.getElementById('statistics').classList.remove('active');
  }

);

document.getElementById('guestMng').addEventListener('click',
  function(){
    document.getElementById('guestMng').classList.add('active');
    document.getElementById('statistics').classList.remove('active');
    if(document.getElementById ('lectureList').getElementsByTagName('li').length>0){
      document.getElementById('lecQuestions').style.display="block";
    }

  }
);

document.getElementById('statistics').addEventListener('click',
  function(){
    document.getElementById('statistics').classList.add('active');
    document.getElementById('guestMng').classList.remove('active');
    document.getElementById('lecQuestions').style.display="none";
  }

);

$('#createQuestion').hide();
$('#lecQuestions').hide();

$("#questIcon").on("click", function(){
  $(" <li class='mylist'>Question Title</li>").appendTo("#questList").focus();
  $('.mylist').on('click',function(){
    $('#createQuestion').show();
    $('#lecQuestions').hide();

  });
});


var oriVal;
$("#lectures").on('dblclick', 'li > a', function () {
    oriVal = $(this).text();
    $(this).text("");
    $("<input type='text' class='rename'>").appendTo(this).focus();
});
$("#lectures").on('focusout', 'li > a > input', function () {
    var $this = $(this);
    $this.parent().text($this.val() || oriVal); // Use current or original val.
    $this.remove();                      // Don't just hide, remove the element.
});

$('#btnCanselQuest').on('click',function(){

  $('#createQuestion').hide();
  $('#lecQuestions').show();

});





//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
