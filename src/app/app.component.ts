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
     let rounded = Math.round(sumValue * 100) / 100
     this.resultStringSum = this.sumNum.front + "+" + this.sumNum.rear + "=" + rounded.toString()
     this.reset()
     this.resultStringSubtract = ""
     this.resultStringMultiply = ""
     this.resultStringDivide = ""
     

  }

  subtract(){
    let subtractValue = +this.subtractNum.front - +this.subtractNum.rear
    let rounded = Math.round(subtractValue * 100) / 100
    this.resultStringSubtract = this.subtractNum.front + "-" + this.subtractNum.rear + "=" + rounded.toString()
    this.reset()
    this.resultStringSum = ""
    this.resultStringMultiply = ""
    this.resultStringDivide = ""
 }

 multiply(){
  let multiplyValue = +this.multiplyNum.front * +this.multiplyNum.rear
  let rounded = Math.round(multiplyValue * 100) / 100
  this.resultStringMultiply = this.multiplyNum.front + "*" + this.multiplyNum.rear + "=" + rounded.toString()
  this.reset()
  this.resultStringSum = ""
  this.resultStringSubtract = ""
  this.resultStringDivide = ""
}

divide(){
  let divideValue = +this.divideNum.front / +this.divideNum.rear
  let rounded = Math.round(divideValue * 100) / 100
  this.resultStringDivide = this.divideNum.front + "/" + this.divideNum.rear + "=" + rounded.toString()
  this.reset()
  this.resultStringSum = ""
  this.resultStringSubtract = ""
  this.resultStringMultiply = ""
}
}
