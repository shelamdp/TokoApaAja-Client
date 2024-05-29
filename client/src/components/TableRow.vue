<template>
    <tr>
        <td scope="row"># {{ i + 1 }}</td>
        <td class="">{{ formatDate(history.updatedAt) }}</td>
        <td class="">{{ getPrice }}</td>

        <td class="">{{ history.status }}</td>
    </tr>
</template>

<script>
export default {
    props: ["history", "i"],
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };

            const formattedDate = date.toLocaleDateString(undefined, options);
            const parts = formattedDate.split('/');
            const formattedDateReordered = `${parts[1]}/${parts[0]}/${parts[2]}`;

            return formattedDateReordered;
        }

    },
    computed: {
        getPrice() {
            return this.history.totalPrice.toLocaleString('id-ID');
        }
    },

}
</script>

<style></style>