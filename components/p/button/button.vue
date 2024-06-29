<template>
    <div class="">

        <UButton :size="size" :type="type" v-wave="{
            color: 'rgb(var(--color-primary-DEFAULT) / .9)',

            duration: .4,

        }" :variant="variant" class="capitalize py-2 rounded-3xl px-5" :class="class">
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


}




const props = withDefaults(defineProps<ButtonPropType>(), {
    variant: "solid",
    type: "button",
    class: ""
})

</script>