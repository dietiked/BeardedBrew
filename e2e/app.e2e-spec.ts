import { BeardedBrewPage } from './app.po';

describe('bearded-brew App', function() {
  let page: BeardedBrewPage;

  beforeEach(() => {
    page = new BeardedBrewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
