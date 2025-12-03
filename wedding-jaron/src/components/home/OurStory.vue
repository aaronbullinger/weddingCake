<template>
  <div class="our-story">
    <h2>Unsere Geschichte ...</h2>
    <p>
      … beginnt mit ein paar Umwegen, freundschaftlichen Kompromissen und einer Menge Bauchgefühl.
      <br>Zwei Wochen nach dem „Wir“ starteten wir in eine Fernbeziehung über 600 Kilometer.
      <br>Später waren’s nur noch 60. Heute teilen wir eine Wohnung und ein abenteuerliches Leben.
    </p>
    <p>
      Chaos-King trifft Ordnungsfan. Overthinkerin trifft Rationalist. Gegensätze? Vielleicht.
      Aber vor allem: ein eingespieltes Team.
    </p>
    <p>
      Mittlerweile sind wir nicht nur zu zweit. Unser kleiner Wirbelwind macht unser Leben noch lauter,
      wilder und schöner. Und wir wachsen mit – als Eltern, als Paar, als Familie.
      Aaron kocht. Jasmin genießt. Am liebsten italienisch – was auch sonst, bei unserem Lieblingsreiseziel.
    </p>
    <p>
      Wenn wir nicht gerade essen oder Kaffee trinken, stehen wir gemeinsam auf Brettern:
      Snowboard, Skateboard, Longboard – Hauptsache Bewegung und gute Laune.
    </p>
    <p>
      Musik begleitet uns seit Tag eins. Unsere gemeinsame Playlist wächst mit uns – zwischen Deutschrap, Hipp-Hop, Indie und allem, was hängen bleibt. Ohne unseren Plattenspieler wären viele Date-Nights nur halb so schön.
    </p>
    <p>
      Am 08.08.24 haben wir uns ganz für uns, still und standesamtlich, das Ja-Wort gegeben.
      <br>Am 26.05.26 feiern wir mit euch ganz offiziell und ganz groß unseren JaAron Day.
      <br>Mit Lieblingsmenschen, gutem Essen, viel Musik und noch mehr Liebe.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "OurStory"
};
</script>

<style scoped lang="scss">
.our-story {
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 50rem;
  text-align: center;


  // Tablet
  @media (max-width: 1024px) {
    max-width: 45rem;
    padding: 1.5rem 1rem;
  }

  // Mobile
  @media (max-width: 768px) {
    max-width: 85%;
    padding: 1.5rem 1rem;
  }

  // Small Mobile
  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    max-width: 85%;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: $espresso-color;
    font-family: Helvetica, sans-serif;
    margin-bottom: 0.9rem;
    margin-right: -3rem;

    // Tablet and Mobile
    @media (max-width: 1024px) {
      margin-right: 0;
      text-align: left;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.7;
      text-align: left;
      margin-bottom: 1rem;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 0.9rem;
      text-align: left;
    }
  }

  h2 {
    font-size: 2rem;
    color: $waldgruen-color;
    margin-bottom: 1.5rem;

    // Tablet
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    // Mobile
    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 1.25rem;
    }

    // Small Mobile
    @media (max-width: 480px) {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
