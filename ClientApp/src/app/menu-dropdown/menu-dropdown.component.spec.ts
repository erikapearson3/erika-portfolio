import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuDropdownComponent } from './menu-dropdown.component';

describe('MenuDropdownComponent', () => {
  let component: MenuDropdownComponent;
  let fixture: ComponentFixture<MenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDropdownComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders links to Home, Projects, and Contact', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('a.dropdown-item')
    ) as HTMLAnchorElement[];

    expect(links.map(link => link.textContent?.trim())).toEqual([
      'Home',
      'Projects',
      'Contact'
    ]);

    expect(links.map(link => link.getAttribute('href'))).toEqual([
      '/',
      '/projects',
      '/contact'
    ]);
  });
});
