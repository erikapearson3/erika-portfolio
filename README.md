\# TechSavvE — Erika Portfolio



A personal portfolio built with Angular and ASP.NET Core to introduce my software engineering background, display my technical skills, and provide access to my GitHub work.



The site is actively developed on `DevBranch001`. Project case studies are planned; the Projects page currently displays a placeholder.



\## Implemented Features



\- Home page with an introduction and frontend/backend skill cards

\- Shared header and dropdown navigation

\- Separate Home, Projects, and Contact routes

\- Contact page linking to my GitHub profile

\- Unknown URLs redirect to Home

\- Component, navigation-link, and routing tests

\- Automated builds and tests through GitHub Actions



\## Technology



\- Angular 20 and TypeScript 5.8

\- Bootstrap 5

\- ASP.NET Core targeting .NET 9

\- Jasmine and Karma

\- GitHub Actions



\## Architecture



Angular standalone components render the interface. The root component contains the shared header and a router outlet; Angular Router selects the page component.



ASP.NET Core provides the application host. During development, its SPA proxy starts the Angular development server. The current application has no custom business API or database.



\## Local Development



\### Prerequisites



\- Git

\- Node.js 22.12.0 and npm

\- .NET 10 SDK, matching the current CI setup

\- Chrome for headless tests



The project targets .NET 9. Running the ASP.NET Core host also requires a compatible .NET 9 runtime, even when building with the .NET 10 SDK.



\### Clone and Install



```cmd

git clone https://github.com/erikapearson3/erika-portfolio.git

cd erika-portfolio

git checkout DevBranch001

cd ClientApp

npm ci

cd ..

dotnet restore PersonalSite.sln

```



\### Run the Application



Trust the local HTTPS development certificate:



```cmd

dotnet dev-certs https --trust

```



Start the host:



```cmd

dotnet run --project PersonalSite.csproj --launch-profile PersonalSite

```



The host is configured at `https://localhost:7235`. Its SPA proxy starts the Angular development server at `https://localhost:44468`; allow time for the frontend to compile.



No application API keys or custom secrets are required for the current portfolio pages.



\## Build



From the repository root:



```cmd

dotnet build PersonalSite.sln --configuration Release

cd ClientApp

npm run build -- --configuration production

```



\## Tests



From `ClientApp`:



```cmd

npm test -- --watch=false --browsers=ChromeHeadless

```



The tests verify:



\- Component creation

\- Home, Projects, and Contact menu destinations

\- Rendering the expected component for each route

\- Redirecting unknown URLs to Home



These checks do not replace manual verification of visual layout, responsive behavior, or the Bootstrap dropdown.



\## Continuous Integration



The workflow in `.github/workflows/ci.yml` runs on pushes to `DevBranch001` and `master`, and on pull requests.



It installs frontend dependencies, builds Angular, runs headless tests, restores .NET dependencies, and builds the ASP.NET Core application.



The workflow does not deploy the site.



\## Ownership



The application started from an ASP.NET Core/Angular template. My changes include the standalone-component structure, portfolio layout, skill cards, page routing, contact content, automated tests, and CI workflow.



\## Current Limitations and Planned Work



\- Add substantive project case studies and repository/demo links

\- Add screenshots documenting the interface

\- Verify mobile layout and keyboard accessibility

\- Document and verify production deployment

\- Resolve the frontend bundle-budget warning if it remains



\## Contact



\[GitHub — erikapearson3](https://github.com/erikapearson3)

