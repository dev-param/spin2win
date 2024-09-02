<template>
    <div :ui="{ body: { padding: '', base: '', } }"
        class=" w-full  flex  justify-between items-center  px-4 py-5 sm:p-6 border-b border-gray-50/30 border-gray-500/30 shadow-lg sticky top-0 z-[999] backdrop-blur-2xl bg-white/50 dark:bg-gray-900/50">
        <div class="">
            <AssetsLogoSm />
        </div>
        <div class="">
            <div class="flex gap-3">

                <ClientOnly>
                    <PButton :icon="themeIcon" :variant="'ghost'" @click="ChangeTheme()"></PButton>
                </ClientOnly>
                <UDropdown :items="menuItems" :popper="{ placement: 'bottom-start', arrow: true }">

                    <PButton icon="i-heroicons-ellipsis-vertical-16-solid"></PButton>
                </UDropdown>
            </div>
        </div>
    </div>
    <div>

        <slot></slot>

    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const menuItems = ref([[{
    label: 'Dashboard',
    icon: 'i-heroicons-puzzle-piece-20-solid',
    to: "/dashboard/",

}], [{
    label: 'Profile',
    icon: 'i-heroicons-user-20-solid',
    to: "/auth/profile/",

}], [{
    label: 'Wallet',
    icon: 'i-heroicons-credit-card-solid',
    to: "/wallet/",


}, {
    label: 'Deposit',
    icon: 'i-heroicons-currency-rupee-solid',
    to: "/wallet/deposit/",


}]])
const themeIcon = computed({
    get() {
        if (colorMode.preference == "light") {
            return "i-heroicons-sun-20-solid"
        }
        else if (colorMode.preference == "dark") {
            return "i-heroicons-moon-20-solid"
        } else {
            return "i-heroicons-computer-desktop-16-solid"
        }
    },
    set() {
        ChangeTheme()
    }
})
defineShortcuts({
    t: {
        handler: ChangeTheme
    }
})
function ChangeTheme() {

    if (colorMode.value === 'dark') {
        colorMode.preference = 'light'
    } else {
        colorMode.preference = 'dark'
    }
}
</script>