<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<MkSpacer :contentMax="700">
	<div class="_gaps">
		<MkFoldableSection class="item">
			<template #header><i class="ph-pulse ph-bold ph-lg"></i> Heatmap</template>
			<MkHeatmap :user="user" :src="'notes'"/>
		</MkFoldableSection>
		<MkFoldableSection class="item">
			<template #header><i class="ph-pencil-simple ph-bold ph-lg"></i> Notes</template>
			<XNotes :user="user"/>
		</MkFoldableSection>
		<MkFoldableSection class="item">
			<template #header><i class="ph-users ph-bold ph-lg"></i> Following</template>
			<XFollowing :user="user"/>
		</MkFoldableSection>
		<MkFoldableSection class="item">
			<template #header><i class="ph-eye ph-bold ph-lg"></i> PV</template>
			<XPv :user="user"/>
		</MkFoldableSection>
	</div>
</MkSpacer>
</template>

<script lang="ts" setup>
import * as Misskey from 'misskey-js';
import XPv from './activity.pv.vue';
import XNotes from './activity.notes.vue';
import XFollowing from './activity.following.vue';
import MkFoldableSection from '@/components/MkFoldableSection.vue';
import MkHeatmap from '@/components/MkHeatmap.vue';

const props = defineProps<{
	user: Misskey.entities.User;
}>();

</script>
