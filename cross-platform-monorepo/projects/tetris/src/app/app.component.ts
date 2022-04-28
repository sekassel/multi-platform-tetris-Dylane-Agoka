import { Component } from '@angular/core';
import {GameEngineLibService} from '../../../game-engine-lib/src/lib/game-engine-lib.service';
import { ElectronService } from './core/services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';

  // constructor(private engineService: GameEngineLibService) {
  //   // tslint:disable-next-line:no-console
  //   // console.info(engineService.testing);
  // }

  constructor(private electronService: ElectronService) {

    if (electronService.isElectron) {
      console.log("Run in electron");
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
    } else {
      console.log("Run in browser");
    }
  }

}
