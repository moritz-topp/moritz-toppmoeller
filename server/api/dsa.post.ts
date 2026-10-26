import nodemailer from "nodemailer"
import { createError, defineEventHandler, readValidatedBody, useRuntimeConfig } from "nuxt/server"

const runtimeConfig = useRuntimeConfig()

const transporter = nodemailer.createTransport({
	host: runtimeConfig.mail.host,
	port: runtimeConfig.mail.port,
	secure: true,
	auth: {
		user: runtimeConfig.mail.user,
		pass: runtimeConfig.mail.pass,
	},
})

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, (data) => {
		if (
			!data || typeof data !== "object"
			|| !("info" in data) || typeof data.info !== "string" || !data.info.trim()
			|| !("address" in data) || typeof data.address !== "string" || !data.address.trim()
			|| !("name" in data) || typeof data.name !== "string" || !data.name.trim()
		) {
			throw createError({
				status: 400,
				statusText: "Bad Request",
			})
		}

		return { info: data.info, address: data.address, name: data.name }
	})

	// Send mail
	await transporter.sendMail({
		from: runtimeConfig.mail.from,
		to: runtimeConfig.mail.to,
		subject: "Meldung nach Art. 16 DSA",
		text: `Info: ${body.info}\nAddress: ${body.address}\nName: ${body.name}`,
	})
})
