import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-outlet-exercise',
  templateUrl: './outlet-exercise.component.html',
  styleUrls: ['./outlet-exercise.component.scss']
})
export class OutletExerciseComponent implements OnInit {

  product$ = this.currentProductService.getProduct();

  constructor(protected currentProductService: CurrentProductService) { }

  ngOnInit(): void {
  }

}
