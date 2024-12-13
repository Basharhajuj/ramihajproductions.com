import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('swiperProjects') swiperProjectsRef!: ElementRef;
  @ViewChild('swiperRef') swiperRef!: ElementRef;
  @ViewChild('videoElement') videoElementRef!: ElementRef;

  private isScrolling = false;
  private scrollTimeout: any;

  public projectsConfig: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  public teamConfig: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 100,
      modifier: 0.6,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 30 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 10 },
    },
  };

  sections: HTMLElement[] = [];
  currentSectionIndex = 0;

  teamMembers = [
    { name: 'john doe', role: 'Graphic Designer', imageUrl: 'assets/VFX.jpg', detailsVisible: false },
    { name: 'Rami haj', role: 'Art Director', imageUrl: 'assets/VFX1.png', detailsVisible: false },
    { name: 'Adham haj', role: 'Photographer', imageUrl: 'assets/VFX3.jpg', detailsVisible: false },
    { name: 'Anas hija', role: 'CGI builder', imageUrl: 'assets/VFX3.jpg', detailsVisible: false },
    { name: 'Bashar hajuj', role: 'Software engineer', imageUrl: 'assets/VFX3.jpg', detailsVisible: false },
  ];

  ngAfterViewInit(): void {
    if (this.swiperProjectsRef) {
      new Swiper(this.swiperProjectsRef.nativeElement, this.projectsConfig);
    }

    if (this.swiperRef) {
      new Swiper(this.swiperRef.nativeElement, this.teamConfig);
    }

    this.sections = Array.from(document.querySelectorAll('section'));

    // Handle video autoplay and muted programmatically
    if (this.videoElementRef) {
      const video = this.videoElementRef.nativeElement as HTMLVideoElement;
      video.muted = true;
      video.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    }
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (!this.isScrolling) {
      this.isScrolling = true;
      // Increase or decrease the section index based on scroll direction
      if (event.deltaY > 0 && this.currentSectionIndex < this.sections.length - 1) {
        this.currentSectionIndex++;
      } else if (event.deltaY < 0 && this.currentSectionIndex > 0) {
        this.currentSectionIndex--;
      }
      this.scrollToSection(this.currentSectionIndex);
    }

    // Reset scrolling after a delay
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 500); // Adjust debounce time as needed
  }

  // Scroll to the specific section based on index
  scrollToSection(index: number): void {
    const sectionTop = this.sections[index].offsetTop;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  }

  // Toggle details visibility and blur effect on click
  toggleBlur(member: any) {
    member.detailsVisible = !member.detailsVisible;
  }
}
