<template>
  <A4>
    <div class="d-flex justify-content-center" style="height: 100%">
      <div class="d-flex flex-column content mt-5">
        <h1 class="main-title">Cover Letter</h1>
        <h4 class="position">
          <PositionText />
        </h4>
        <div class="letter">
          <CoverLetterText />
        </div>
      </div>
    </div>
  </A4>
</template>

<script>
import A4 from "@/A4";
import PositionText from "@/texts/PositionText";
import CoverLetterText from "@/texts/CoverLetterText";

export default {
  name: "CoverLetter",
  components: {
    A4,
    PositionText,
    CoverLetterText,
  },
};
</script>

<style lang="scss" scoped>
$middle-column-width: $right-column-width - $left-column-width;

.content {
  flex: 0 0 $middle-column-width;
  padding: 0rem $section-space 0rem $section-space;
}

.position {
  margin-top: $paragraph-space;
}

.letter {
  margin-top: $section-space * 2;
  text-align: justify;
}
</style>
