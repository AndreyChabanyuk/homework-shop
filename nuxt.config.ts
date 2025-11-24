// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	imports: {
		autoImport: true,
	},
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	},
	runtimeConfig: {
		token: '',
		public: {
			postsurl: '',
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
		{
			path: '~/widgets',
		},
	],
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/scripts',
		'@pinia/nuxt',
	],
})
