import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-worker-example';

  public ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      for (let i = 0; i < 10; i++) {
        const worker: Worker = new Worker('./app.worker', {name: 'Web Worker: ' + i, type: 'module'});
        worker.postMessage(i);
        worker.addEventListener('message', ({data}) => {
          console.log('Got message from worker: ', data);
        });
        worker.onerror = () => {
          console.error('An error occurred in Web Worker: ' + i);
          worker.terminate();
        };
      }
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}

