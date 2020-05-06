import { Component, OnInit, Inject } from '@angular/core';
import { Config } from '@spartacus/core';

@Component({
  selector: 'app-config-exercise',
  templateUrl: './config-exercise.component.html',
  styleUrls: ['./config-exercise.component.scss']
})
export class ConfigExerciseComponent implements OnInit {

  displayLevel = this.config.displayLevel;

  constructor(@Inject(Config) public config: any) { }

  ngOnInit() {
    if (this.config.displayLevel === 'Console') {
      console.log(this.config);
    }
  }

}
