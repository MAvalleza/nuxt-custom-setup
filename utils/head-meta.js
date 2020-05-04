const LANG = 'en_US';
const TYPE = 'website';
// TODO: Replace this
const SITE_NAME = 'yoursitename.com';
const URL = `https://${SITE_NAME}`;

export default ({ title, description, socialBanner }) => {
  return {
    title,
    description,
    meta: [
      // normal meta
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      // facebook meta
      {
        hid: 'locale',
        name: 'og:locale',
        content: LANG,
      },
      {
        hid: 'type',
        name: 'og:type',
        content: TYPE,
      },
      {
        hid: 'type',
        name: 'og:url',
        content: URL,
      },
      {
        hid: 'type',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'type',
        name: 'og:site_name',
        content: SITE_NAME,
      },
      {
        hid: 'type',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'image',
        name: 'og:image',
        content: socialBanner,
      },
      // twitter meta
    ],
  };
};
