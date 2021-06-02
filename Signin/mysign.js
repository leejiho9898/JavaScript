"use strict";

function idcheck() {
  var Id = document.getElementById("ID").value;
  //아이디 조건
  if (Id.length > 13) {
    alert("아이디는 13자리 미만이어야 합니다.");
    return false;
  } else {
    return true;
  }
}
s;s

function idcheck2() {
  //아이디 중복체크
  //백앤드 배우면 추가
}

function pwcheck() {
  var Pw1 = document.getElementById("pw").value,
    Pw2 = document.getElementById("pwi").value;
  //비밀번호 조건
  var spe = /[`~!@#$%^&*()]/gi;
  var alp = /[a-zA-Z]/;
  var num = /[0-9]/g;
  if (Pw1 != Pw2) {
    alert("비밀번호가 일치하지 않습니다");
    return false;
  } else if (Pw1.length < 6 || Pw1.length > 16) {
    alert("비밀번호는 6글자 이상, 16글자 이하만 이용가능합니다.");
    return false;
  } else if (spe.test(Pw1) == false || alp.test(Pw1) == false || num.test(Pw1) == false) {
    alert("비밀번호는 반드시 특수문자, 알파벳, 숫자를 포함해야 합니다.");
    return false;
  } else {
    return true;
  }
}

function submithandle() {
  if (idcheck() == true && pwcheck() == true) {
    return true;
  } else {
    return false;
  }
}
