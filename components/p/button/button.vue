<template>
    <div class="">

        <UButton :size="size" :type="type" :disabled="disabled"
            v-wave="{ color: 'rgb(var(--color-primary-DEFAULT) )', duration: .6, initialOpacity: .4, dissolveDuration: .3 }"
            :to="to" :variant="variant" class="capitalize  rounded-3xl " :class="{
                class: true,
                'px-4 py-2': icon === '',
                'p-2': icon
            }" :loading="loading" :icon="icon" :block="block"
            :ui="{ variant: { soft: 'dark:bg-primary-900/40 dark:hover:bg-primary-950 dark:text-primary-300' } }">
            <slot></slot>
        </UButton>
    </div>

</template>


<script setup lang="ts">

import type { ButtonSize, ButtonVariant } from '#ui/types'

type ButtonTypes = 'button' | 'submit';
interface ButtonPropType {
    variant?: ButtonVariant,
    type?: ButtonTypes,
    size?: ButtonSize,
    class?: string,
    loading?: boolean,
    icon?: string,
    to?: string,
    block?: boolean,
    disabled?: boolean



}




const props = withDefaults(defineProps<ButtonPropType>(), {
    variant: "solid",
    type: "button",
    class: "",
    loading: false,
    icon: "",
    to: "",
    block: false,
    disabled: false
})

</script>