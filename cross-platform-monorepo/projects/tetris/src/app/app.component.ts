import { Component } from '@angular/core';
import {GameEngineLibService} from '../../../game-engine-lib/src/lib/game-engine-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';

  constructor(private engineService: GameEngineLibService) {
    // tslint:disable-next-line:no-console
    console.info(engineService.testing);
  }
}
