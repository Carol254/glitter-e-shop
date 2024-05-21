import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements AfterViewInit {

  speed:number = 50;
  initialTxt:number = 0;
  requiredTxt:any = 'Adorn yourself with the brilliance of our unique jewelry pieces. Shop now for unmatched elegance.';
  observer: IntersectionObserver | undefined;

  @ViewChild('intro', { static: false }) intro!: ElementRef;
  
 ngAfterViewInit(): void {
  this.initIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }


  initIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.resetTypeWriter();
          this.typeWriter();
        }
      });
    }, { threshold: 0.1 });//calling resetTypeWriter & typewriter fn when the elememnt is 10% visible

    if (this.intro) {
      this.observer.observe(this.intro.nativeElement);
    }
  }

  resetTypeWriter() {
    this.intro.nativeElement.innerHTML = '';
    this.initialTxt = 0;
  }

  typeWriter(){
    if(this.initialTxt < this.requiredTxt.length ){
      this.intro.nativeElement.innerHTML += this.requiredTxt.charAt(this.initialTxt);
      this.initialTxt ++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }

}
 
