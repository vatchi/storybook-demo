<template>
    <div class="search-bar__container">
        <label class="search-bar__label" :for="id">{{ label }}</label>
        <input
            class="search-bar__input"
            v-model="query"
            @input="onQueryChanged"
            :id="id"
            :placeholder="placeholder"
            type="search"
        />
        <button class="search-bar__submit" @click="onSearch">
            {{ button }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
        label: {
            type: String,
            required: true,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        button: {
            type: String,
            default: 'Search',
        },
    },
    data() {
        return {
            id: null,
            query: '',
        };
    },
    mounted() {
        this.id = this._uid;
    },
    methods: {
        onSearch() {
            this.$emit('onSearch', this.query);
        },
        onQueryChanged() {
            this.$emit('onQueryChanged', this.query);
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'SearchBar.scss';
</style>
