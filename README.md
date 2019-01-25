# S1VM

A CSS extension to help **Solutions One Design + Vue Material** work perfectly together. Documentation [here](https://s1vm.netlify.com/)

## Project setup

```

	npm install

```

### Compiles and hot-reloads for development

```

	npm run serve

```

### Compiles and minifies for production

```

	npm run build

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Starting a new app

1. First, we recommend that you have the following ready environment:
   a. NodeJS [link](https://nodejs.org/en/)
   b. NPM [link](https://www.npmjs.com/get-npm)
   c. Ruby (to local sass compile) [link](https://rubyinstaller.org/downloads/)
   d. Ruby Sass (to local sass compile) [link](https://sass-lang.com/ruby-sass)
   e. windows-build-tools [link](https://www.npmjs.com/package/windows-build-tools)

###

2.  Install [Vue CLI 3](https://cli.vuejs.org/) and use it to create your app.

```

	vue create my-new-app

```

###

3. Add [Vue Material](https://vuematerial.io/getting-started/) to your project

```

	npm install vue-material --save

```

###

4. Install sass dependences to use S1VM

```

	npm install sass-loader --save
	npm install node-sass --save

```

###

5. Add all content from `S1VM/src/style/` in `assets/css/`

```
	//FROM S1VM
	src/
	  style/
		layout
		theme
		_global-variables.scss
		index.scss
		layout.scss
		theme.scss

	//TO YOUR APP PROJECT
	assets/
	  css/
		layout
		theme
		_global-variables.scss
		index.scss
		layout.scss
		theme.scss

```

###

6. (Optional) We have some high-level settings to you.

   - Use `md-register-theme` in `theme.scss` to configure the colors of your app. See the documentation [here](https://vuematerial.io/themes/configuration) (Vue Material - Themes - Configuration)

   ```
   	@include  md-register-theme(
   		"default",
   		(
   			primary: md-get-palette-color(blue, 900),
   			accent: md-get-palette-color(pink, 500)
   		)
   	);
   ```

   - Use `_global-variables.scss` to configure **S1VM** bg-color and general settings.

   ```
   	//S1VM Settings
   	$utilitiesClassNamePrefix: "s1-U";
   	$forceSuffix: "-force";

   	//THEME
   	$app-background-color: #fafafa;
   ```
