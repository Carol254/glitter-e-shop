import { IMAGE_CONFIG, NgOptimizedImage,NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements AfterViewInit {

  constructor(private router:Router){}

  speed:number = 50;
  initialTxt:number = 0;
  requiredTxt:any = 'Adorn yourself with the brilliance of our unique jewelry pieces. Shop now for unmatched elegance.';
  observer: IntersectionObserver | undefined;

  @ViewChild('intro', { static: false }) intro!: ElementRef;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  currentIndex = 0;
  images1 = [
    '/assets/photo_12.jpg',
    '/assets/photo_13.jpg',
    '/assets/photo_14.jpg'
  ];
  images2 = [
    '/assets/photo_15.jpg',
    '/assets/photo_16.jpg',
    '/assets/photo_17.jpg'
  ];
  images3 = [
    '/assets/photo_18.jpg',
    '/assets/photo_5.jpg',
    '/assets/photo_11.jpg',
    '/assets/photo_25.jpg',
    '/assets/photo_23.jpg',
    '/assets/photo_17.jpg',
    '/assets/photo_11.jpg',
    '/assets/photo_13.jpg',
    '/assets/photo_12.jpg'
  ];
  quotes = [
    { text: 'You cant cry on a diamonds shoulder, and diamonds wont keep you warm at night, but theyre sure fun when the sun shines.', author: 'Elizabeth Taylor' },
    { text: 'The finest workers in stone are not copper or steel tools, but the gentle touches of air and water working at their leisure with a liberal allowance of time', author: 'Henry David Thoreau' },
    { text: 'Big girls need big diamonds.', author: 'Elizabeth Taylor' }
  ];
  
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

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.quotes.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.quotes.length - 1) ? this.currentIndex + 1 : 0;
  }

  viewAllProducts(){
    this.router.navigate(['/all-products']);
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -250, // Adjust this value to your preference
      behavior: 'smooth'
    });
  }

    scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 250, // Adjust this value to your preference
      behavior: 'smooth'
    });
  }

}
 
