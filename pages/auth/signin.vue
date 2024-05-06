<template>
    <div class="flex justify-center h-screen md:items-center">
        <UCard class="max-w-md w-full ring-0 shadow-none md:ring-1 rounded-3xl py-10">
            <div class=" flex flex-col gap-6">
                <div class="">
                    <AssetsLogo />
                </div>
                <PInputsFilledInput input-label="username" />
                <PInputsFilledInput input-label="Email Address" />
                <PInputsFilledInput input-type="password" input-label="password" />
                <PInputsFilledInput input-type="password" input-label="Confirm Password" />

                <div class="my-5">
                    <UCheckbox label="I agree with all term and conditions"></UCheckbox>
                </div>
                <div class="flex flex-col items-center gap-6">

                    <PButton>Create Account</PButton>


                    <NuxtLink to="/auth/login/">
                        <PButton variant="soft">
                            Already Have an Account ?
                        </PButton>
                    </NuxtLink>
                </div>


            </div>

        </UCard>
    </div>
</template>