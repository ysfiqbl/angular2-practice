import { SampleDemoPage } from './app.po';

describe('sample-demo App', function() {
  let page: SampleDemoPage;

  beforeEach(() => {
    page = new SampleDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
