declare interface DsaPayload {
	info: string
	address: string
	name: string
}

declare module "nuxt/schema" {
	interface RuntimeConfig {
		mail: {
			host: string
			port: number
			user: string
			pass: string
			to: string
			from: string
		}
	}
}
