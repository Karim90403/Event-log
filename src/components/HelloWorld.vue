<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref([
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1001',
    code: 'ff4g39j90',
    name: 'Wooden Watch',
    description: 'Product Description',
    image: 'wooden-watch.jpg',
    price: 75,
    category: 'Accessories',
    quantity: 20,
    inventoryStatus: 'INSTOCK',
    rating: 4.5
},
{
    id: '1002',
    code: 't89jgop32',
    name: 'Metal Watch',
    description: 'Product Description',
    image: 'metal-watch.jpg',
    price: 90,
    category: 'Accessories',
    quantity: 18,
    inventoryStatus: 'INSTOCK',
    rating: 4.8
},
{
    id: '1003',
    code: 'g543h9y62',
    name: 'Leather Watch',
    description: 'Product Description',
    image: 'leather-watch.jpg',
    price: 55,
    category: 'Accessories',
    quantity: 30,
    inventoryStatus: 'INSTOCK',
    rating: 4.3
},
{
    id: '1004',
    code: 'g7j2jk986',
    name: 'Plastic Watch',
    description: 'Product Description',
    image: 'plastic-watch.jpg',
    price: 40,
    category: 'Accessories',
    quantity: 15,
    inventoryStatus: 'INSTOCK',
    rating: 4.1
}
])
const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

// defineProps<{ msg: string }>()

</script>

<template>
  <DataTable :value="products" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" class="bg-green-500" :key="col.field" :field="col.field" sortable :header="col.header"></Column>
  </DataTable>
</template>

<style scoped>
</style>
