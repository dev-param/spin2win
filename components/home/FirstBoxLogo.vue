<template>
    <div class="">

        <div class="flex justify-center text-primary-100 dark:text-primary-50 items-center text-[8vw]  md:text-[10vw] font-bold "
            style="font-family: 'Bebas Neue';">

            <div v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="200"
                class="flex justify-center flex-col gap-2" style="line-height: 1cap;">
                <div class="">L</div>
                <div class="">W</div>
            </div>
            <!-- <divclass="">
                lotterywottery
            </div> -->
            <div class="text-[24vw]  md:text-[22vw] pl-6 md:-mx-6 bg-gradient-to-r from-primary-500 to-primary-950 bg-clip-text text-transparent"
                v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="300">
                ottery</div>
            <!-- <div class="" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :delay="400">
                Win
            </div> -->

            <!-- Spin2Win -->
        </div>


        <div class=" text-center text-xl font-bold -mt-9">
            Roulette | Tic-tac-toe | More

        </div>
        <div class="flex justify-center mt-8">
            <NuxtLink to="/auth/login/">

                <div v-wave class=" bg-gradient-to-tl from-primary-950 to-primary-700 py-3 w-32 text-center rounded-full
                font-bold">
                    Join
                    now</div>
            </NuxtLink>
        </div>
    </div>
</template>