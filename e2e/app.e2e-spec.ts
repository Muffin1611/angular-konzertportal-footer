import { AngularKonzertportalFooterPage } from './app.po';

describe('angular-konzertportal-footer App', () => {
  let page: AngularKonzertportalFooterPage;

  beforeEach(() => {
    page = new AngularKonzertportalFooterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
