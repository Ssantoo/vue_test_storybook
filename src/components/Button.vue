<template>
    <v-btn color="primary">{{ buttonText }}</v-btn>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        buttonText: {
            type: String,
            default: 'test',
        },
    },
}
</script>