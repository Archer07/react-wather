const webpack = require('webpack');

module.exports = {
	entry: ['script-loader!jquery/dist/jquery.min.js',
					'script-loader!foundation-sites/dist/foundation.min.js', './app/app.js'],
	externals: { // set modules to variables to use them inside scripts
		jquery: 'jQuery'
	},
	plugins:[
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: 'public/app.js'
	},
	resolve: {
    modules:[__dirname, 'node_modules'],
    alias: {
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMsg:'app/components/WeatherMsg.jsx',
			About:'app/components/About.jsx',
			Contact:'app/components/Contact.jsx',
			Examples: 'app/components/Examples.jsx',
			ErrorModal:'app/components/ErrorModal.jsx'
    },
    extensions: ['*','.js', '.jsx']
  },
	module: {
		loaders: [
			{
			loader:'babel-loader',
			test: /\.jsx?$/,
			query:{
				presets:  ['react', 'es2015', 'stage-0']
			},
			exclude: /(node_modules|bower_components)/
			}
		]
	}
}
