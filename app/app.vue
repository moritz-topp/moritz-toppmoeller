<template>
	<div class="min-h-screen bg-base-200">
		<div class="flex flex-col md:flex-row">
			<aside class="md:w-1/3">
				<div class="relative top-0 h-64 overflow-hidden md:sticky md:h-screen">
					<img
						src="/hero.webp"
						alt="Hintergrundbild"
						class="h-full w-full object-cover object-top md:object-center"
						loading="lazy"
					/>
				</div>
			</aside>

			<div class="flex min-h-screen flex-1 flex-col bg-base-100 md:w-2/3">
				<header class="border-b border-base-300 px-6 py-8 text-center md:text-left">
					<NuxtLink to="/" class="mx-auto block w-full max-w-5xl">
						<h1 class="my-2 text-3xl font-bold md:text-4xl">Moritz Toppmöller</h1>
						<p class="text-base opacity-80">{{ t("system.subtitle") }}</p>
					</NuxtLink>
					<div class="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
						<NuxtLink
							v-for="link in profileLinks"
							:key="link.id"
							class="badge inline-flex items-center gap-2 badge-outline badge-xl text-xs font-medium transition badge-secondary hover:text-primary hover:badge-primary"
							:href="link.href"
							target="_blank"
							:aria-label="link.id"
						>
							<Icon :name="link.icon" size="1.1em" class="shrink-0" />
							<span>{{ link.id }}</span>
						</NuxtLink>
					</div>
				</header>

				<main id="main" class="flex-1 bg-base-200 p-6">
					<div class="mx-auto w-full max-w-5xl">
						<NuxtPage />
					</div>
				</main>

				<footer class="border-t border-base-300 p-6 text-sm">
					<div class="mx-auto w-full max-w-5xl">
						<div class="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between">
							<div class="flex flex-col gap-2">
								<nav class="flex flex-wrap gap-3">
									<NuxtLink
										class="link link-hover hover:link-primary"
										:to="localePath('impressum')"
										>{{ t("system.imprint") }}</NuxtLink
									>
									<NuxtLink
										class="link link-hover hover:link-primary"
										:to="localePath('datenschutz')"
										>{{ t("system.privacy") }}</NuxtLink
									>
									<NuxtLink class="link link-hover hover:link-primary" :to="localePath('agb')">{{
										t("system.terms")
									}}</NuxtLink>
								</nav>
							</div>

							<div class="flex flex-row gap-6 md:items-center">
								<div class="join self-center" role="group" :aria-label="t('system.language')">
									<button
										type="button"
										class="btn join-item btn-sm btn-primary"
										:class="locale === 'de' ? '' : 'btn-outline'"
										:aria-pressed="locale === 'de'"
										aria-label="Sprache Deutsch"
										@click="navigateTo(switchLocalePath('de'))"
									>
										DE
									</button>
									<button
										type="button"
										class="btn join-item btn-sm btn-primary"
										:class="locale === 'en' ? '' : 'btn-outline'"
										:aria-pressed="locale === 'en'"
										aria-label="Language English"
										@click="navigateTo(switchLocalePath('en'))"
									>
										EN
									</button>
								</div>

								<div class="join self-center" role="group" :aria-label="t('system.theme')">
									<client-only>
										<button
											type="button"
											class="btn join-item btn-sm btn-primary"
											:class="colorMode.value === 'light' ? '' : 'btn-outline'"
											:aria-pressed="colorMode.value === 'light'"
											aria-label="Lichtmodus aktivieren"
											@click="setTheme('light')"
										>
											<Icon name="mdi:white-balance-sunny" size="1.2em" />
										</button>
										<button
											type="button"
											class="btn join-item btn-sm btn-primary"
											:class="colorMode.value === 'dark' ? '' : 'btn-outline'"
											:aria-pressed="colorMode.value === 'dark'"
											aria-label="Dunkelmodus aktivieren"
											@click="setTheme('dark')"
										>
											<Icon name="mdi:weather-night" size="1.2em" />
										</button>
									</client-only>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t, locale } = useI18n();
	const localePath = useLocalePath();
	const switchLocalePath = useSwitchLocalePath();

	useSeoMeta({
		titleTemplate: "%s | " + t("system.title"),
		description: t("system.subtitle") + " | " + t("system.description.part3")
	});

	const colorMode = useColorMode();
	const setTheme = (mode: "light" | "dark") => {
		colorMode.preference = mode;
	};

	const profileLinks = [
		{
			id: "LinkedIn",
			href: "https://www.linkedin.com/in/moritz-toppm%C3%B6ller-2a66a7200/",
			icon: "mdi:linkedin"
		},
		{
			id: "Instagram",
			href: "https://www.instagram.com/moritz.topp/",
			icon: "mdi:instagram"
		},
		{
			id: "ORCID",
			href: "https://orcid.org/0009-0000-6056-7402",
			icon: "simple-icons:orcid"
		},
		{
			id: "ResearchGate",
			href: "https://www.researchgate.net/profile/Moritz-Toppmoeller",
			icon: "simple-icons:researchgate"
		},
		{
			id: "GitHub",
			href: "https://github.com/moritz-topp",
			icon: "mdi:github"
		},
		{
			id: "GitLab",
			href: "https://gitlab.ub.uni-bielefeld.de/moritz.toppmoeller",
			icon: "mdi:gitlab"
		},
		{
			id: "Uni Bielefeld (Profil)",
			href: "https://ekvv.uni-bielefeld.de/pers_publ/publ/PersonDetail.jsp?personId=185865553",
			icon: "mdi:school"
		}
	];
</script>
