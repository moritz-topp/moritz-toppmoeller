import type { H3Event } from "h3";
import nodemailer from "nodemailer";

const runtimeConfig = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: runtimeConfig.mail.host,
	port: runtimeConfig.mail.port,
	secure: true,
	auth: {
		user: runtimeConfig.mail.user,
		pass: runtimeConfig.mail.pass
	}
});

export default defineEventHandler(async (event: H3Event) => {
	const body = await readBody<DsaPayload>(event);
	if (!body?.info || !body?.address || !body?.name) {
		console.log(body);
		throw createError({
			statusCode: 400,
			statusMessage: "Bad Request"
		});
	}

	// Send mail
	await transporter.sendMail({
		from: runtimeConfig.mail.from,
		to: runtimeConfig.mail.to,
		subject: "Meldung nach Art. 16 DSA",
		text: "Info: " + body.info + "\nAddress: " + body.address + "\nName: " + body.name
	});
});
