<template>
    <div class="">

        <UButton v-wave="{
            color: 'rgb(var(--color-primary-DEFAULT) / 1)',

            duration: .4,

        }" :variant="variant" class="capitalize py-2 rounded-3xl px-5">
            <slot></slot>
        </UButton>
    </div>

</template>


<script setup lang="ts">

defineProps({
    variant: { default: "solid" }
})

</script>