    var Id=document.getElementById('ID').value,
        Pw1=document.getElementById('pw').value,
        Pw2=document.getElementById('pwi').value,
        Nick = document.getElementById('nickname').value,
        Phone = document.getElementById('phonenomber').value;

    function idcheck(id){//아이디 조건
        if (id.length > 13) {
            alert('아이디는 13자리 미만이어야 합니다.')
            return false;
            }
            else{
                return true;
            }
        }

    function idcheck2(id){ //아이디 중복체크
    //나중에 더 배우면 추가.
    }
    
    function pwcheck(pw1,pw2) { //비밀번호 조건
        var special = /[`~!@#$%^&*()]/gi;
        if (a != b) {
            alert("비밀번호가 일치하지 않습니다");
            return false;
        }
        else if (pw1.length<6||pw1.length>16) {
            alert("비밀번호는 6글자 이상, 16글자 이하만 이용가능합니다.")
            return false;
        }
        // else if(){
                
        //     } 아직 특수문자는 구현중
            else{
                return true;
            }
        }
    function phonecheck(phonenomber){ //전화번호 숫자제한
        if(isNaN(phonenomber)==false){
            alert("전화번호는 숫자로 입력해야 합니다.");
            return false;
        }
        else{
            return true;}
    }

    function submit(){
        if (idcheck(Id)==true && pwcheck(Pw1,Pw2) == true && phonecheck(Phone) == true){
            return true;
        }
        else{
            return false;
        }
    }
