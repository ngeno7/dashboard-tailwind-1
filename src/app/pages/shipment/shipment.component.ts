import { Component } from '@angular/core';
import { of, map, reduce, } from 'rxjs';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent {

  ngOnInit() {

      of(1, 2, 3)
      .pipe(map(x => x*2))
      .pipe(reduce((sum, x) => sum+x))
      .subscribe((x) => { console.log(x); });
  }
}
