import { MoviehoodPage } from './app.po';

describe('moviehood App', function() {
  let page: MoviehoodPage;

  beforeEach(() => {
    page = new MoviehoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
