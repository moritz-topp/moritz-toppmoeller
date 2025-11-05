<template>
	<div class="space-y-5 md:space-y-6">
		<div class="space-y-4 text-justify text-base md:space-y-6">
			<p>{{ t("system.description.part1") }}</p>
			<p>{{ t("system.description.part2") }}</p>
			<p>{{ t("system.description.part3") }}</p>
		</div>

		<SectionCard v-bind="content.education" />
		<SectionCard v-bind="content.experience" />
		<SectionCard v-bind="content.publications" />
		<SectionCard v-bind="content.events" />

		<div class="grid gap-4 md:grid-cols-2 md:gap-6">
			<SectionCard v-bind="content.languages" />
			<SectionCard v-bind="content.interests" />
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n()

	useSeoMeta({
		titleTemplate: t("system.title"),
	})

	const content = {
		education: {
			title: t("education.title"),
			icon: "mdi:school-outline",
			itemIcon: "mdi:book-education-outline",
			items: [
				{
					id: "masters",
					text: t("education.items.masters.text"),
					subline: t("education.items.masters.subline"),
				},
				{
					id: "bachelor",
					text: t("education.items.bachelor.text"),
					subline: t("education.items.bachelor.subline"),
				},
			],
		},
		experience: {
			title: t("experience.title"),
			icon: "mdi:briefcase-outline",
			itemIcon: "mdi:hexagon-multiple-outline",
			items: [
				{
					id: "hiwi",
					text: t("experience.items.hiwi.text"),
					subline: t("experience.items.hiwi.subline"),
				},
				{
					id: "freelance",
					text: t("experience.items.freelance.text"),
					subline: t("experience.items.freelance.subline"),
				},
				{
					id: "bits",
					text: t("experience.items.bits.text"),
					subline: t("experience.items.bits.subline"),
				},
			],
		},
		publications: {
			title: t("publications.title"),
			icon: "mdi:book-open-variant",
			itemIcon: "mdi:file-document-outline",
			items: [
				{
					text: t("publications.papers.microgravity.title"),
					subline: t("publications.papers.microgravity.subline"),
					href: "https://doi.org/10.4119/unibi/3002766",
				},
			],
		},
		events: {
			title: t("events.title"),
			icon: "mdi:calendar-star",
			itemIcon: "mdi:calendar-blank-outline",
			items: [
				{
					id: "future",
					text: t("events.items.future.text"),
					subline: t("events.items.future.subline"),
				},
			],
		},
		languages: {
			title: t("languages.title"),
			icon: "mdi:translate",
			itemIcon: "mdi:bookmark",
			items: [
				{
					id: "de",
					text: t("languages.items.de.text"),
					subline: t("languages.items.de.subline"),
				},
				{
					id: "en",
					text: t("languages.items.en.text"),
					subline: t("languages.items.en.subline"),
				},
			],
		},
		interests: {
			title: t("interests.title"),
			icon: "mdi:compass-outline",
			itemIcon: "mdi:star-four-points-outline",
			items: [
				{ id: "digitalMedicine", text: t("interests.items.digitalMedicine") },
				{ id: "medicalInformatics", text: t("interests.items.medicalInformatics") },
				{ id: "webDev", text: t("interests.items.webDev") },
			],
		},
	}
</script>
