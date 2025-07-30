<template>
    <main>
      <div class="info-box">
        <div class="info-text">
          <h2>
            <span class="highlight">Damit wir besser planen können</span><br>
            gebt uns doch gerne Feedback
          </h2>

          <p>Wir freuen uns auf Euch!</p>
        </div>
      </div>
    </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  gap: 60px;
}

.info-text {
  flex: 2;
  max-width: 600px;
  text-align: left;
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 1.3;
  font-weight: 400;
}

.info-text h2 .highlight {
  color: $salbei-color;
  font-weight: bold;
}

.info-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
}
</style>