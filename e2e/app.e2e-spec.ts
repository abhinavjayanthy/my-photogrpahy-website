import { MyPhotographyWebsitePage } from './app.po';

describe('my-photography-website App', () => {
  let page: MyPhotographyWebsitePage;

  beforeEach(() => {
    page = new MyPhotographyWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
