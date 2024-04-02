<template>
  <div>
    <template v-if="articles.length > 0">
      <div v-for="article in articles" :key="article._id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.imageURL }}</p>
        <p>{{ article.description }}</p>
        <!-- Add other fields as needed -->
      </div>
    </template>
    <template v-else>
      <p>No articles available.</p>
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // Import ref and onMounted from Vue

export default {
  setup() {
    const articles = ref([]); // Initialize a ref for articles array

    // Fetch articles from the backend API endpoint
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        articles.value = data; // Update articles ref with fetched data
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    onMounted(fetchArticles); // Call fetchArticles function when component is mounted

    return {
      articles // Expose articles ref to the template
    };
  }
};
</script>

<style scoped>
  /* Add any scoped styles if needed */
</style>
