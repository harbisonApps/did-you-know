export default {
    methods: {
        submitForm() {
            this.$refs.modalFactName.$refs.name.validate()
            if (!this.$refs.modalFactName.$refs.name.hasError) {
                this.submitFact()
            }
        },
    },
    // components: {
    //     ModalHeader: require("components/Facts/Modals/shared/ModalHeader.vue").default,
    //     ModalFactName: require("components/Facts/Modals/shared/ModalFactName.vue").default,
    //     ModalFactCat: require("components/Facts/Modals/shared/ModalFactCat.vue").default,
    //     ModalFactDesc: require("components/Facts/Modals/shared/ModalFactDesc.vue").default,
    //     ModalFactText: require("components/Facts/Modals/shared/ModalFactText.vue").default,
    //     ModalFactImage: require("components/Facts/Modals/shared/ModalFactImage.vue").default,
    // }
}