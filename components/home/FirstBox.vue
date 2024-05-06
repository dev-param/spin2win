<template>

    <div class="
        absolute -top-[50vw] right-[0vw]  w-screen overflow-hidden
        md:-right-[40vw] md:-top-[40vw]   md:w-[80vw] 
        ">
        <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="200">

            <img class="w-full  animate-spin [drop-shadow(0_0px_25px_rgba(133,133,133,1))]   " src="/asset/wheel.png"
                alt="wheel">
        </div>
    </div>
    <div class="flex items-center justify-center pt-10 md:pt-0 md:justify-start h-full md:pl-16  xl:pl-24">
        <HomeFirstBoxLogo />
    </div>

</template>


<style scoped>
keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 10s linear infinite;
}
</style>