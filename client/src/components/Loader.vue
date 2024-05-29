<template>
    <div>
        <div class="loader"></div>

    </div>
</template>

<style scoped>
.loader {
    border: 16px solid #f3f3f3;
    /* Light gray */
    border-top: 16px solid #212122;
    /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
    margin-top: 50px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>  