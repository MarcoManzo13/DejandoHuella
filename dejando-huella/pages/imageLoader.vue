<template>
    <div>
      <form @submit.prevent="submit">
        <input type="file" @change="selectFile" />
        <button type="submit">Upload</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      selectFile(event) {
        this.selectedFile = event.target.files[0];
      },
      async submit() {
        if (!this.selectedFile) {
          alert("Please select a file first.");
          return;
        }
  
        const formData = new FormData();
        formData.append("file", this.selectedFile);
  
        try {
          await this.$axios.post("/api/pictures/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert("File uploaded successfully.");
        } catch (error) {
          console.error("Upload failed:", error);
          alert("Upload failed.");
        }
      },
    },
  };
  </script>
  