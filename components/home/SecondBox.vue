<template>
    <div class="w-screen h-screen relative overflow-hidden bg-primary-800">

        <div class="">
            <div class="flex flex-col-reverse md:flex-row justify-center md:justify-evenly h-screen items-center ">
                <div class="">

                    <div class="flex text-primary-100 dark:text-primary-50 items-baseline text-[20vw]  md:text-[10vw] font-bold "
                        style="font-family: 'Bebas Neue';">
                        Tic-tac-toe
                    </div>
                    <div class="text-center font-mono font-bold">
                        Play 1 vs 1
                    </div>
                    <div class="flex justify-center mt-8">
                        <div
                            class="bg-gradient-to-tl from-primary-950 to-primary-700 py-3 w-32 text-center rounded-full font-bold shadow-xl">
                            Play
                            now </div>
                    </div>
                </div>
                <div class="">
                    <div class="rounded-3xl  w-[80vw] md:w-[40vw]">
                        <HomeSecondBoxHandsvg />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>