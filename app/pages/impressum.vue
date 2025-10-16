<template>
	<div class="container">
		<div v-if="locale === 'de'" class="prose">
			<h1>Impressum</h1>

			<p>
				Moritz Toppm&ouml;ller<br />
				Moritz-Topp | IT-Beratung &amp; Hosting<br />
				Nordhorner Str. 33<br />
				33335 G&uuml;tersloh
			</p>

			<h2>Kontakt</h2>
			<p>
				Telefon: +491707650817<br />
				E-Mail: info@moritz-topp.de
			</p>

			<h2>Umsatzsteuer-ID</h2>
			<p>
				Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
				DE349261301
			</p>

			<h2>Gewerbeanmeldung</h2>
			<p>
				Die Gewerbeerlaubnis nach &sect;15 Abs.1 GewO wurde am 29.05.2020 von folgender Stelle erteilt: Stadt
				G&uuml;tersloh.
			</p>

			<h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
			<p>
				<strong>Name und Sitz des Versicherers:</strong><br />
				Allianz Versicherungs-AG<br />
				K&ouml;niginstr. 28<br />
				80802 M&uuml;nchen
			</p>
			<p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

			<h2>Redaktionell verantwortlich</h2>
			<p>Moritz Toppm&ouml;ller</p>

			<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
			<p>
				Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.
				Zust&auml;ndig ist die Universalschlichtungsstelle des Zentrums f&uuml;r Schlichtung e.V.,
				Stra&szlig;burger Stra&szlig;e 8, 77694 Kehl am Rhein (<a
					href="https://www.verbraucher-schlichter.de"
					rel="noopener noreferrer"
					target="_blank"
					>https://www.verbraucher-schlichter.de</a
				>).
			</p>

			<h2>Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)</h2>
			<p>
				Unsere zentrale Kontaktstelle f&uuml;r Nutzer und Beh&ouml;rden nach Art. 11, 12 DSA erreichen Sie wie
				folgt:
			</p>
			<p>
				E-Mail: abuse@moritz-topp.de<br />
				Telefon: +491707650817
			</p>
			<p>Die für den Kontakt zur Verf&uuml;gung stehenden Sprachen sind: Deutsch, Englisch.</p>
		</div>
		<div v-else class="prose">
			<h1>Site Notice</h1>

			<p>
				Moritz Toppm&ouml;ller<br />
				Moritz-Topp | IT-Beratung &amp; Hosting<br />
				Nordhorner Str. 33<br />
				33335 G&uuml;tersloh
			</p>

			<h2>Contact</h2>
			<p>
				Phone: +491707650817<br />
				E-mail: info@moritz-topp.de
			</p>

			<h2>VAT ID</h2>
			<p>
				Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
				DE349261301
			</p>

			<h2>Business registration</h2>
			<p>
				The business license according to &sect;15 Abs.1 GewO was granted on 29.05.2020 by the following
				institution: Stadt G&uuml;tersloh.
			</p>

			<h2>Information regarding professional liability insurance</h2>
			<p>
				<strong>Name and registered office of the insurer:</strong><br />
				Allianz Versicherungs-AG<br />
				K&ouml;niginstr. 28<br />
				80802 M&uuml;nchen
			</p>
			<p><strong>Scope of insurance:</strong><br />Deutschland</p>

			<h2>Person responsible for editorial</h2>
			<p>Moritz Toppm&ouml;ller</p>

			<h2>Dispute resolution proceedings in front of a consumer arbitration board</h2>
			<p>
				We participate in a dispute settlement procedure before a consumer arbitration board. The competent
				consumer arbitration board is Zentrum f&uuml;r Schlichtung e.V., Stra&szlig;burger Stra&szlig;e 8, 77694
				Kehl am Rhein (<a href="https://www.verbraucher-schlichter.de" rel="noopener noreferrer" target="_blank"
					>https://www.verbraucher-schlichter.de</a
				>).
			</p>

			<h2>Central contact point according to the Digital Services Act - DSA (Regulation (EU) 2022/265)</h2>
			<p>
				You can reach our central contact point for users and authorities in accordance with Art. 11, 12 DSA as
				follows:
			</p>
			<p>
				E-mail: abuse@moritz-topp.de<br />
				Phone: +491707650817
			</p>
			<p>The languages available for contact are: German, English.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { locale } = useI18n();
	definePageMeta({
		i18n: {
			paths: {
				en: "/legal/"
			}
		}
	});
</script>
