module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPageTree',
      externals: {
        react: 'React'
      }
    }
  }
}
