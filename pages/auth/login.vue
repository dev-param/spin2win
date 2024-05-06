<template>
    <div class="flex justify-center h-screen md:items-center">
        <UCard class="max-w-md w-full ring-0 shadow-none md:ring-1 rounded-3xl py-10">
            <div class=" flex flex-col gap-6">
                <div class="">
                    <AssetsLogo />
                </div>
                <PInputsFilledInput input-label="username" />
                <PInputsFilledInput input-type="password" input-label="password" />
                <div class="flex flex-col items-center gap-6">

                    <PButton>Login</PButton>


                    <NuxtLink to="/forget/">

                        <PButton variant="link">
                            Forget Password ?
                        </PButton>
                    </NuxtLink>
                    <NuxtLink to="/auth/signin/">
                        <PButton variant="soft">
                            Create Account
                        </PButton>
                    </NuxtLink>

                </div>


            </div>

        </UCard>
    </div>
</template>