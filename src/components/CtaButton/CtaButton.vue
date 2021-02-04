<template>
    <button
        class="cta-button"
        :class="'cta-button--' + size"
        type="button"
        @click="onClick"
        :style="style"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'CtaButton',
    props: {
        label: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: 'medium',
            validator: function (value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            },
        },
        backgroundColor: {
            type: String,
        },
    },

    computed: {
        style() {
            return {
                backgroundColor: this.backgroundColor,
            };
        },
    },

    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'CtaButton.scss';
</style>
