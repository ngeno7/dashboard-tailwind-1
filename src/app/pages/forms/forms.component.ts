import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  public modal1 = false;
  public modal2 = false;
  public modal3 = false;
  public modal4 = false;

  popModal1() :void {
    this.modal1 = !this.modal1;
  }

  popModal2() :void {
    this.modal2 = !this.modal2;
  }

  popModal3() :void {
    this.modal3 = !this.modal3;
  }

  popModal4() :void {
    this.modal4 = !this.modal4;
  }

}
