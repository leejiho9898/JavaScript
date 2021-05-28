

    function idcheck(){//아이디 조건
        if (Id.length > 13) {
            alert('아이디는 13자리 미만이어야 합니다.')
            return false;
            }
            else{
                return true;
            }
        }

    function idcheck2(){ //아이디 중복체크
    //백앤드 배우면 추가
    }
    
    function pwcheck() { //비밀번호 조건
        var spe = /[`~!@#$%^&*()]/gi;
        var alp = /[a-zA-Z]/;
        var num = /[1-9]/;
        if (Pw1 != Pw2) {
            alert("비밀번호가 일치하지 않습니다");
            return false;
        }
        else if (pw1.length<6||pw1.length>16) {
            alert("비밀번호는 6글자 이상, 16글자 이하만 이용가능합니다.")
            return false;
        }
        else if(spe.test(Pw1)==false && alp.test(Pw1)==false && num.test(Pw1)==false){
            alert("비밀번호는 반드시 특수문자, 알파벳, 숫자를 포함해야 합니다.")
            return false;
            }
        else{
            return true;
            }
        }

    function submithandle(){
        var Id=document.getElementById('ID').value,
        Pw1=document.getElementById('pw').value,
        Pw2=document.getElementById('pwi').value,
        Nick = document.getElementById('nickname').value,
        Phone = document.getElementById('phonenumber').value;
        if (idcheck(Id)==true && pwcheck(Pw1,Pw2) == true){
            return true;
        }
        else{
            return false;
        }
    }
