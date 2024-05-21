import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  speed:number = 50;
  initialTxt:number = 0;
  requiredTxt:any = 'Adorn yourself with the brilliance of our unique jewelry pieces. Shop now for unmatched elegance.';

  // @ViewChild('intro', { static: false }) intro!: ElementRef;
  
  // ngOnInit(): void {
      
  // }

  // typeWriter(){
  //   if(this.initialTxt > this.requiredTxt.length ){
  //     this.intro.nativeElement.innerHTML += this.requiredTxt.charAt(this.initialTxt);
  //     this.initialTxt ++;
  //     this.speed;
  //   }
  // }

}
 
