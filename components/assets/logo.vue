<template>
    <div class="flex justify-center text-primary-100 dark:text-primary-50 items-baseline text-[15vw]  md:text-9xl font-bold "
        style="font-family: 'Bebas Neue';">

        <div v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="200" class="">
            Spin
        </div>
        <div class="text-[16vw]  md:text-[148px] -mx-2 md:-mx-4 bg-gradient-to-r from-primary-500 to-primary-950 bg-clip-text text-transparent"
            v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="300">
            2</div>
        <div class="" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="400">
            Win
        </div>

        <!-- Spin2Win -->
    </div>
</template>