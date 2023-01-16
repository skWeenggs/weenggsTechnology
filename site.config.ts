import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: '7875426197cf461698809def95960ebf',
  rootNotionPageId: '85600ab30a3c42778d2b05342b740ada',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'weenggs technology',
  domain: 'weenggstechnology.dev',
  author: 'Weenggs Technology',

  // open graph metadata (optional)
  description: 'Example of weenggs Site',

  // social usernames (optional)
  twitter: 'weenggs',
  // github: 'transitive-bullshit',
  linkedin: 'weenggs-technology',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
    // '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      // pageId: 'f1199d37579b41cbabfc0b5174f4256a'
      pageId: '587aaeeac59b4d5f8637e0a35fe9adc8'
    },
    {
      title: 'Contact',
      // pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
      pageId: 'bb3a4abf38314d7389aae1ba7b52da99'
    },
    {
      title: 'PortFolio',
      pageId: 'ba19f90d649a4feeae7cef2ce8962f1a'
    },
    
  
  ],
  navigationLinksBlock: [
    {
      title:'Iphone App Development',
      pageId:'226ffcbc5ff4405c9e7cffc259f67790'
    },
    {
      title:'Android App Development',
      pageId:'a30dcb07c8c943afa8b19b1988254bdb'
    },
    {
      title:'Custom App Development',
      pageId:'703ba2cc4a3a49fb9729eb50e14fbc72'
    },
    {
      title:'Desktop App Development',
      pageId:'9c6661e769c944c3ac9d1dd108e861cc'
    }
  ],
})
