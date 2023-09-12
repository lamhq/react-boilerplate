export default {
  logo: <>
    <img src="/logo.svg" style={{ height: "32px" }} />

    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      React Boilerplate
    </span>
  </>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="React Boilerplate" />
      <meta property="og:description" content="Starter codebase for Single-page React application" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </>
  ),
  project: {
    link: 'https://github.com/lamhq/react-boilerplate'
  },
  docsRepositoryBase: 'https://github.com/lamhq/react-boilerplate/tree/master/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s - React Boilerplate'
    }
  },
  navigation: {
    prev: true,
    next: true
  }
  // ...
}