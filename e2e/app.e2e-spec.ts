import { CellCardPage } from './app.po';

describe('cell-card App', function() {
  let page: CellCardPage;

  beforeEach(() => {
    page = new CellCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
