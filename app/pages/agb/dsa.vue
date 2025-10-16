<template>
	<div class="container">
		<div class="prose">
			<nav class="not-prose mb-4 flex flex-wrap gap-2">
				<NuxtLink class="btn btn-outline btn-xs btn-primary" :to="localePath('/agb/')">{{
					t("system.terms")
				}}</NuxtLink>
				<NuxtLink class="btn btn-outline btn-xs btn-primary" :to="localePath('/agb/av/')">{{
					t("system.av")
				}}</NuxtLink>
				<NuxtLink class="btn btn-xs btn-primary" :to="localePath('/agb/dsa/')">{{ t("system.dsa") }}</NuxtLink>
			</nav>

			<h1>Meldebogen nach Art. A16 DSA</h1>
			<form class="flex flex-col" @submit.prevent="sendMail()">
				<h2 id="dsa-info-label">
					1. Bitte benennen Sie die aus Ihrer Sicht rechtswidrige Information und begründen Sie, warum Sie
					diese als rechtswidrig ansehen.
				</h2>
				<div class="w-full md:px-4">
					<textarea
						v-model="dsa.info"
						required
						class="textarea textarea-bordered textarea-primary w-full"
						placeholder="..."
						aria-labelledby="dsa-info-label"
					/>
				</div>
				<h2 id="dsa-address-label">
					2. Bitte teilen Sie mit, wo sich dieser Inhalt befindet (z.B. genaue URL-Adresse sowie weitere
					zweckdienliche Informationen zur Ermittlung des Inhalts).
				</h2>
				<div class="w-full md:px-4">
					<textarea
						v-model="dsa.address"
						class="textarea textarea-bordered textarea-primary w-full"
						placeholder="..."
						aria-labelledby="dsa-address-label"
					/>
				</div>
				<h2 id="dsa-name-label">
					3. Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse bzw. den Namen und die E-Mail-Adresse der
					Organisation, für die Sie die Meldung durchführen.
				</h2>
				<div class="w-full md:px-4">
					<textarea
						v-model="dsa.name"
						class="textarea textarea-bordered textarea-primary w-full"
						placeholder="..."
						aria-labelledby="dsa-name-label"
					/>
				</div>
				<p>
					<b>Hinweis:</b> Sie können auf die Angabe dieser Daten verzichten, wenn Sie Straftaten im
					Zusammenhang mit sexuellem Missbrauch, sexueller Ausbeutung oder Kinderpornographie oder die
					Kontaktaufnahme zu Kindern für sexuelle Zwecke melden wollen. Gleiches gilt, wenn Sie dahingehende
					Anstiftungs-, Beihilfe- oder Versuchshandlungen melden möchten.
				</p>
				<h2>Erklärung der meldenden Person</h2>
				<p>
					Die meldende Person oder Einrichtung erklärt hiermit, dass die in der Meldung enthaltenen Angaben
					und Ausführungen richtig und vollständig sind.
				</p>
				<p>
					<b>Datenschutzhinweis:</b> Wenn wir eine Meldung nach dem Art. 16 DSA erhalten, werden alle damit
					verbundenen personenbezogenen Daten zweckgebunden zur Überprüfung und korrekten Bearbeitung der
					Meldung von uns verarbeitet. Das umfasst auch personenbezogene Daten der meldenden Person, sofern
					diese angegeben wurden (z.B. Namen, E-Mail-Adressen). Die personenbezogenen Daten aus der Meldung
					werden zweckgebunden verarbeitet und nach Wegfall des Verarbeitungszwecks gelöscht. Die
					Datenverarbeitungen erfolgen auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit Art. 16
					Digital Service Act (DSA). Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
					Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Ihnen steht außerdem
					ein Recht auf Widerspruch, auf Datenübertragbarkeit und ein Beschwerderecht bei der zuständigen
					Aufsichtsbehörde zu. Ferner können Sie die Berichtigung, die Löschung und unter bestimmten Umständen
					die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen. Details entnehmen Sie
					unserer <NuxtLink :to="localePath('datenschutz')" class="underline">Datenschutzerklärung</NuxtLink>.
				</p>
				<button
					:disabled="send || loading"
					:class="send ? 'text-primary bg-white' : ''"
					class="hover:text-primary mx-auto my-4 rounded border border-white px-4 py-2 transition hover:bg-white"
					type="submit"
				>
					<span v-if="loading">...</span>
					<span v-else>
						<span v-if="send">Abgeschickt</span>
						<span v-else>Senden</span>
					</span>
				</button>
			</form>

			<hr />

			<h1>AGB-Inhaltemoderation</h1>
			<p>
				Wenn Sie unsere Angebote nutzen und dabei Inhalte (Text-, Bild-, Audio- oder Video-Beiträge) in unseren
				Online-Angeboten speichern, hochladen oder posten, sind Sie allein für diese Inhalte verantwortlich und
				müssen die nachfolgenden Regeln beachten.
			</p>
			<h2>1. Welche Inhalte sind verboten?</h2>
			<p>
				Sie dürfen keine Inhalte auf unseren Online-Angeboten speichern, hochladen oder posten, die gegen das
				geltende Recht oder gegen die zwischen uns geschlossenen Verträge verstoßen. Sie dürfen insbesondere
				nicht
			</p>
			<ul>
				<li>
					beleidigend, rassistisch, gewaltverherrlichend oder -verharmlosend, volksverhetzend,
					rechtsextremistisch, diskriminierend, verfassungsfeindlich, jugendgefährdend, pornografisch sein;
				</li>
				<li>gegen das Straf- oder Ordnungswidrigkeitenrecht verstoßen;</li>
				<li>gegen die mit Ihnen geschlossenen Verträge oder AGB verstoßen;</li>
				<li>gegen die Rechte Dritter (z.B. Marken- und Urheberrechte) verstoßen;</li>
				<li>gegen das Wettbewerbsrecht verstoßen;</li>
				<li>gegen Gesetze oder die guten Sitten verstoßen;</li>
				<li>Schadsoftware oder Schadcode enthalten;</li>
				<li>gegen sonstige von uns auferlegte Regeln oder Vorgaben (z.B. Netiquette) verstoßen.</li>
			</ul>
			<h2>2. Wie werden die Inhalte überprüft?</h2>
			<p>
				Wir prüfen die Inhalte manuell, wenn sie von unseren Mitarbeitern entdeckt werden oder wenn wir von
				Dritten entsprechende Hinweise erhalten. Eine proaktive Überprüfung der Inhalte durch uns erfolgt
				grundsätzlich nicht. Wir behalten uns aber das Recht vor, Inhalte nach eigenem Ermessen hinsichtlich der
				Einhaltung der oben genannten Regeln zu überprüfen und anlassbezogen erforderliche Maßnahmen zu
				ergreifen.
			</p>
			<h2>3. Was passiert mit verbotenen Inhalten?</h2>
			<p>
				Wenn der begründete Verdacht besteht, dass ein Inhalt gegen die hier genannten Regeln verstößt, gehen
				wir wie folgt vor: <br />
				<b>Sperrung:</b> Der betroffene Inhalt wird zunächst unverzüglich gesperrt. <br />
				<b>Stellungnahmefrist:</b> Sofern uns die Kontaktdaten vorliegen, werden wir den Urheber des Inhalts
				kontaktieren und ihm eine angemessene Frist zur Stellungnahme einräumen. Sofern der Urheber innerhalb
				der Frist keine Stellung bezieht, wird der Inhalt gelöscht. <br />
				<b>Abschließende Entscheidung:</b> Sofern der Urheber Stellung bezieht oder eine Kontaktaufnahme zum
				Urheber nicht möglich ist, werden wir den Sachverhalt auf Grundlage der vorhandenen Informationen
				bewerten und entscheiden, welche Maßnahmen wir ergreifen. Hierbei sind insbesondere folgende Maßnahmen
				möglich:
			</p>
			<ul>
				<li>Unbefristete Sperrung des betreffenden Inhalts</li>
				<li>Endgültige Löschung des betreffenden Inhalts</li>
				<li>Verwarnung des Nutzers</li>
				<li>Vorübergehende oder teilweise Sperrung des betreffenden Nutzers</li>
				<li>Ordentliche oder außerordentliche Kündigung des Vertrags</li>
				<li>
					Strafanzeige oder Anzeige beim Ordnungsamt (sofern eine Straftat, die eine Gefahr für Leib, Leben
					oder Sicherheit einer Person im Raum steht, müssen wir diese aus gesetzlichen Gründen melden)
				</li>
			</ul>
			<p>
				Wir wägen unsere Entscheidungen sorgfältig ab. Hierbei berücksichtigen wir insbesondere die Rechte und
				Freiheiten der Urheber und der potenziellen Betroffenen. Die Folgemaßnahmen werden verhältnismäßig sein.
				Das bedeutet, dass wir immer die mildeste, dem Verstoß angemessene Maßnahme auswählen werden. Hierbei
				berücksichtigen wir insbesondere
			</p>
			<ul>
				<li>die Schwere des Verstoßes</li>
				<li>die Anzahl und den Umfang der Gesamtverstöße</li>
				<li>potenzielle Auswirkungen auf unsere Dienste sowie auf unsere Nutzer und sonstige Dritte</li>
				<li>das Gesamtverhalten des Nutzers (z.B. dessen Einsichtsfähigkeit hinsichtlich des Verstoßes)</li>
				<li>Verschulden (Vorsatz, Fahrlässigkeit)</li>
				<li>Motive des Verstoßes (soweit erkennbar)</li>
				<li>Einlassungen des Nutzers (sofern vorhanden)</li>
			</ul>
			<p>
				<b>Information:</b> Sofern wir die Kontaktdaten des Urhebers haben, werden wir ihn über das Ergebnis
				unserer Bewertung informieren; eine solche Information erfolgt nicht, soweit wir sie aus rechtlichen
				Gründen nicht erteilen dürfen (z.B. laufende polizeiliche Ermittlungen).
			</p>
			<h2>4. Wie können rechtswidrige Inhalte gemeldet werden?</h2>
			<p>
				Wenn Sie rechtswidrige Inhalte in unserem Online-Angebot finden oder einen dahingehenden Verdacht haben,
				können Sie uns das jederzeit mitteilen. Unsere Kontaktdaten finden Sie in unserem Impressum. Ihre
				personenbezogenen Daten werden nicht an den Urheber der gemeldeten Information weitergegeben.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const localePath = useLocalePath();

	definePageMeta({
		i18n: {
			paths: {
				en: "/terms/dsa/"
			}
		}
	});

	useSeoMeta({
		title: t("system.dsa")
	});

	const dsa = ref<DsaPayload>({
		info: "",
		address: "",
		name: ""
	});

	const send = ref(false);
	const loading = ref(false);
	const sendMail = async () => {
		loading.value = true;
		await $fetch("/api/dsa", {
			method: "POST",
			body: dsa.value
		});
		send.value = true;
		loading.value = false;
	};
</script>
