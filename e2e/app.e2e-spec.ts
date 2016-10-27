import { Ent3rprisePage } from './app.po';

describe('ent3rprise App', function() {
  let page: Ent3rprisePage;

  beforeEach(() => {
    page = new Ent3rprisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
