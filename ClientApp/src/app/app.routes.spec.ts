import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

describe('Portfolio routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    });
  });

  it('loads the homepage', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', HomepageComponent);
  });

  it('loads Projects', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projects', ProjectsComponent);
  });

  it('loads Contact', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/contact', ContactComponent);
  });

  it('redirects unknown URLs to Home', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/missing-page', HomepageComponent);

    expect(TestBed.inject(Router).url).toBe('/');
  });
});
