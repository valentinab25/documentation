module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  VoltoSidebar: [
    'volto',
    {
      type: 'category',
      label: 'Views',
      items: ['tutorials/upload'],
    },
  ],
  ClassicSidebar: [
    'classic',
    {
      type: 'category',
      label: 'Theming',
      items: ['guides/post'],
    },
  ],
};
