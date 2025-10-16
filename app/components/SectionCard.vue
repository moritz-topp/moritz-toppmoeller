<template>
	<section class="border-base-300 bg-base-100 rounded-4xl border-2 p-4 md:p-6">
		<header class="flex items-center gap-2 md:gap-3">
			<div class="bg-base-200 text-primary flex size-10 items-center justify-center rounded-full md:size-12">
				<Icon :name="props.icon" size="30px" />
			</div>
			<h3 class="text-xl font-semibold md:text-2xl">{{ props.title }}</h3>
		</header>

		<ul class="mt-4 space-y-2 md:mt-6 md:space-y-3">
			<li
				v-for="item in props.items || []"
				:key="item.id"
				class="border-base-200 rounded-4xl flex items-start gap-2 border p-2 md:gap-3 md:p-3"
			>
				<Icon
					v-if="item.icon || props.itemIcon"
					:name="item.icon || props.itemIcon"
					class="text-primary my-auto shrink-0"
				/>
				<div class="flex flex-col gap-1">
					<NuxtLink
						v-if="item.href"
						:href="item.href"
						target="_blank"
						external
						class="hover:text-primary font-semibold leading-snug transition"
					>
						{{ item.text }}
					</NuxtLink>
					<p v-else>{{ item.text }}</p>
					<p v-if="item.subline" class="text-sm opacity-75">
						{{ item.subline }}
					</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	const props = defineProps<{
		title: string;
		icon: string;
		items?: {
			id: string;
			text: string;
			icon?: string;
			href?: string;
			subline?: string;
		}[];
		itemIcon?: string | null;
	}>();
</script>
