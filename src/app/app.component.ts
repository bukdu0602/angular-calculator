import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  sumNum = {
    front: "",
    rear: ""
  }
  subtractNum = {
    front: "",
    rear: ""
  }
  multiplyNum = {
    front: "",
    rear: ""
  }
  divideNum = {
    front: "",
    rear: ""
  }

  resultStringSum = ""
  resultStringSubtract = ""
  resultStringMultiply = ""
  resultStringDivide = ""

  reset(){
    this.sumNum.front = ""
    this.sumNum.rear = ""
    this.subtractNum.front = ""
    this.subtractNum.rear = ""
    this.multiplyNum.front = ""
    this.multiplyNum.rear = ""
    this.divideNum.front = ""
    this.divideNum.rear = ""
  }

  sum(){
     let sumValue = +this.sumNum.front + +this.sumNum.rear
     this.resultStringSum = this.sumNum.front + "+" + this.sumNum.rear + "=" + sumValue.toString()
     this.reset()
     this.resultStringSubtract = ""
     this.resultStringMultiply = ""
     this.resultStringDivide = ""
     

  }

  subtract(){
    let subtractValue = +this.subtractNum.front - +this.subtractNum.rear
    this.resultStringSubtract = this.subtractNum.front + "-" + this.subtractNum.rear + "=" + subtractValue.toString()
    this.reset()
    this.resultStringSum = ""
    this.resultStringMultiply = ""
    this.resultStringDivide = ""
 }

 multiply(){
  let multiplyValue = +this.multiplyNum.front * +this.multiplyNum.rear
  this.resultStringMultiply = this.multiplyNum.front + "*" + this.multiplyNum.rear + "=" + multiplyValue.toString()
  this.reset()
  this.resultStringSum = ""
  this.resultStringSubtract = ""
  this.resultStringDivide = ""
}

divide(){
  let divideValue = +this.divideNum.front / +this.divideNum.rear
  this.resultStringDivide = this.divideNum.front + "/" + this.divideNum.rear + "=" + divideValue.toString()
  this.reset()
  this.resultStringSum = ""
  this.resultStringSubtract = ""
  this.resultStringMultiply = ""
}
}
