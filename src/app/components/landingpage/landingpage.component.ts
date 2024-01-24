import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

isPopupOpen: any;
scrollToSection(arg0: string) {
throw new Error('Method not implemented.');
}
constructor(private router:Router){
  console.log('constructor invoked')
  setTimeout(()=>{
    console.log('set timeout triggered')
    //  router.navigate(['/card']);

  },3000)
  
}
;

}
