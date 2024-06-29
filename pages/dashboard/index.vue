<template>
    <div class="flex">
        <UCard class="w-full max-w-sm h-screen pt-5" :ui="{
            body: {
                base: '',
                background: '',
                padding: 'px-0 py-5 sm:p-0',
            }
        }">
            <AssetsLogoSm />

            <div class=" mt-32 relative p-6">

                <UCard class=" flex flex-col gap-44  py-4">
                    <div class="text-center text-xl">
                        username here
                    </div>
                    <div class="flex justify-around">
                        <div class="">Cash Amount: </div>
                        <div class="">$0.00</div>
                    </div>
                    <div class="flex justify-around">
                        <div class="">Gaming Amount: </div>
                        <div class="">₡0.00</div>
                    </div>
                    <div class="flex justify-center py-4">
                        <PButton>
                            ADD More Credits
                        </PButton>
                    </div>
                </UCard>
                <UCard class="absolute -top-10 left-[37%] w-24 h-24 shadow-md rounded-full"></UCard>
            </div>
            <!-- menu -->
            <div class=" mt-12 ">
                <div class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        Account
                    </div>
                    <UIcon name="i-heroicons-user-circle" />
                </div>
                <div class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        Games
                    </div>
                    <UIcon name="i-heroicons-puzzle-piece-solid" />
                </div>
                <div class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        News
                    </div>
                    <UIcon name="i-heroicons-newspaper-20-solid" />
                </div>
                <div class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        Friends List
                    </div>
                    <UIcon name="i-heroicons-user-group-solid" />
                </div>
                <div class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        Match's
                    </div>
                    <UIcon name="i-heroicons-shield-check-solid" />
                </div>
                <div v-wave class="flex justify-between p-6 ring-1 ring-t ring-gray-700/40 hover:bg-primary">
                    <div class="">
                        Ticket's
                    </div>
                    <UIcon name="i-heroicons-ticket-solid" />
                </div>
            </div>
        </UCard>
        <div class="">
            <div class=" p-8">
                <UCard class="w-48 h-48">


                </UCard>
            </div>
        </div>
    </div>




</template>