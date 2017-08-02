import { MyFirtsAppPage } from './app.po';

describe('my-firts-app App', () => {
  let page: MyFirtsAppPage;

  beforeEach(() => {
    page = new MyFirtsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
