module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
		? '/vuetify-data-tables/'
		: '/',
  transpileDependencies: [
    'vuetify'
  ]
}
