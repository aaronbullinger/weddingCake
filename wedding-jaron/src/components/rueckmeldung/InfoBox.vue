<template>
    <div class="info-box">
      <div class="info-text">
        <h2>
          <span class="highlight">Damit wir besser planen können</span><br>
          gebt uns doch gerne Feedback
        </h2>

        <p>
          Bitte gib uns kurz Bescheid, ob du an unserem großen Tag dabei bist.
          Teile uns mit, ob du mit Begleitung oder Kindern kommst,
          ob es Unverträglichkeiten oder Allergien gibt und ob du eine Übernachtung brauchst.
        </p>
        <p>
          Informationen zur Unterkunft und zur Location findest du im Menü unter den jeweiligen Punkten.
          </p>
      </div>
      <div class="info-image">
        <img src="@/assets/safeOurDateImg3.png" alt="Paarbild">
      </div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75vw;
  margin: 0 auto;
  gap: 3.7rem;
}

.info-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 25rem;
  margin-right: 0;
}

.info-image img {
  width: 9rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 6rem;
  filter: grayscale(100%);
  margin-top: 3rem;
  margin-right: 6rem;
}

.info-text {
  flex: 2;
  max-width: 37.5rem;
  text-align: left;
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-weight: 400;
  color: $waldgruen-color;
}

.info-text h2 .highlight {
  color: $salbei-color;
  font-weight: bold;
}

.info-text p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: $espresso-color;
  font-family: Helvetica, sans-serif;
  margin-bottom: 0.9rem;
}
</style>