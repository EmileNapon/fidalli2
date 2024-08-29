import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  showSearch = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  isFixed: boolean = false;
  isFixed2: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarRelativeHeight = document.querySelector('.navbar-relative')?.clientHeight || 0;

    const scrollPosition = window.scrollY;

    if (scrollPosition >= navbarRelativeHeight) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

}
