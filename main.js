/**
 * Bai 1:
 * B1: Input: number1. number2, number3
 * B2: Handle:
 *  -Khai báo các biến (num1,num2,num3)
 *  -Lấy các giá trị cho biến num1,num2,num3
 *  -Lập điều kiện để xuất ra kết quả 3 số theo thứ tự từ nhỏ đến lớn
 *      _Trường hợp num1 > num2
 *          +Nếu num2 > num3 => 3 2 1
 *          +Nếu num1 > num3 => 2 3 1
 *          +Ngược lại => 2 1 3
 *      _Trường hợp num2 > num3
 *          +Nếu num1 > num3 => 3 1 2
 *          +Ngược lại => 1 2 3
 *  -Xuất kết quả ra cho người dùng
 * B3: Output: 3 số theo thứ tự tăng dần
 */ 
var sortUpAscending = function (num1, num2, num3) {
    var temp = "";
    if (num1 > num2) {
        if (num2 > num3) {
            temp = num3 + " " + num2 + " " + num1;
        } else if (num1 > num3) {
            temp = num2 + " " + num3 + " " + num1;
        } else {
            temp = num2 + " " + num1 + " " + num3;
        }
    } else if (num2 > num3) {
        if (num1 > num3) {
            temp = num3 + " " + num1 + " " + num2;
        } else {
            temp = num1 + " " + num3 + " " + num1;
        } 
    } else {
        temp = num1 + " " + num2 + " " + num3;
    }
    return temp;
};

var btnSortUp = document.getElementById('btnSortUp');

//Sắp xếp
btnSortUp.addEventListener('click', function(){
//Lấy giá trị người dùng
var ipNum1 = parseInt(document.getElementById('ipNumber1').value);
var ipNum2 = parseInt(document.getElementById('ipNumber2').value);
var ipNum3 = parseInt(document.getElementById('ipNumber3').value);
var result = sortUpAscending(ipNum1, ipNum2, ipNum3);
//in
document.getElementById("resultSort").innerHTML = "3 số được sắp xếp thứ tự tăng dần là: " + result;
});

/**
 * Bai 2:
  * -Input: option: value
 * 
 * -Handle:
 * B1: Khai báo các biến: value, message
 * B2: Lập điều kiện để biết ng dùng chọn mình là ai => xuất hiện câu chào phù hợp
 *      +Nếu value=rỗng => "Vui lòng cho biết bạn là ai trong gia đình"
 *      +Nếu value = B => Chào bố
 *      +Nếu value = M => Chào mẹ
 *      +Nếu value = A => Chào anh trai
 *      +Nếu value = E => Chào e gái
 * -Ouput:
 * _Xuất ra câu chào người chọn: message
 */

 function greeting(obj){
    var message = document.getElementById('result');
    var value = obj.value;
    if(value === ''){
        message.innerHTML = "Please let me who you are!";
        message.style.display='block';
    }else if(value === 'F'){
        message.innerHTML = "Hello Father! :3";
        message.style.display='block';
    }else if(value === "M"){
        message.style.display='block';
        message.innerHTML = "Hello Mother! :3";
    }else if(value === "B"){
        message.style.display='block';
        message.innerHTML =  "Hello Brother! :3";
    }else if(value === 'S'){
        message.style.display='block';
        message.innerHTML = "Hello Sister! :3";
    }
}

/**
 * -Input: number1, number2, number3
 * Handle:
 * _B1: Khai báo các biến a,b,c,soLuongSoChan,soLuongSoLe
 * _B2: Lấy giá trị của người dùng nhập vào cho các biến a,b,c
 * _B3: Nếu số chia hết cho 2 thì tăng 1 cho soLuongSoChan
 *      Ngược lại cộng vào soLuongSoLe
 * _B4: Xuất ra cho ng dùng số lượng số chẵn và số lượng số lẻ
 * 
 * -Output
 * _Số lượng số chẵn: soLuongSoChan
 * _Số lượng số lẻ: soLuongSoLe
 */


 var result = document.getElementById('resultCount');
 document.getElementById("btnCount").addEventListener("click", function(){
     var a = parseInt(document.getElementById('number1').value);
     var b = parseInt(document.getElementById('number2').value);
     var c = parseInt(document.getElementById('number3').value);
     var arr = [a,b,c];
     var amountOfEvenNumber = 0;
     var amountOfOddNumber = 0;
     var i = 0;
     for(i=0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
             amountOfEvenNumber++;
        }else{
            amountOfOddNumber++;
        }
     }
    result.style.display='block';
    result.innerHTML = "Amount of even number: " + amountOfEvenNumber + "<br>" + "Amount of odd number: " + amountOfOddNumber; 
 });

 /**
 * -Input:
 * Edge 1: a
 * Edge 2: b
 * Edge 3: c
 * 
 * -Handle:
 * B1: khai báo các biến a,b,c
 * B2: Lấy giá trị cho các biến  a,b,c từ input
 * B3: Lập điều kiện
 *      +Nếu a = b & a = c & b = c =>Đều
 *      +Nếu a= b or a = c or b = c => Cân
 *      +Nếu bình phương 1 cạnh = tổng 2 cạnh còn lại =>Vuông
 * _B4: Xuất kết qua ra cho người dùng
 * 
 * 
 * 
 * Khối 3: 
 * _Tam giác trên là tam giác gì? => đều, cân hay vuông?
 */



var resultCheck = document.getElementById('resultCheck');

document.getElementById('btnCheck').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('edge1').value);
    var b = parseFloat(document.getElementById('edge2').value);
    var c = parseFloat(document.getElementById('edge3').value);
    if (a <= 0 || b <= 0 || c <= 0) {
        resultCheck.style.display='block';
        resultCheck.innerHTML = 'Please enter an edge greater than 0';
    } else {
        if (a == b && a == c && b == c) {
            resultCheck.style.display='block';
            resultCheck.innerHTML = "This is tam giac deu!";
        }
        else if (a == b || a == c || b == c) {
            resultCheck.style.display='block';
            resultCheck.innerHTML = "This is tam giac can!";
        }
        else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
            resultCheck.style.display='block';
            resultCheck.innerHTML = "This is tam giac vuong!";
        }
    }
});