import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'angularStuff';
  constructor(private _formBuilder: FormBuilder) {
    // this.check();
  }
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // isLinear = false;

  // check(): void {
  //   let x = 1;
  //   var y = 1;
  //   if (!this.isLinear) {
  //     let x = 2;
  //     var y = 2;
  //   }
  //   console.log('x->', x);
  //   console.log('y->', y);

  //   var fibonacci = {
  //     [Symbol.iterator]: function* () {
  //       var pre = 0,
  //         cur = 1;
  //       for (;;) {
  //         var temp = pre;
  //         pre = cur;
  //         cur += temp;
  //         yield cur;
  //       }
  //     },
  //   };

  //   for (var n of fibonacci) {
  //     if (n > 10) break;
  //     console.log(n);
  //   }
  // }
}
