<template>
  <div>
    <TimelineItem>
      <template #startDate>September 2015</template>
      <template #title>
        Started
        <a
          href="https://www.bath.ac.uk/courses/undergraduate-2020/computer-science/bsc-computer-science-including-placement-year/"
          target="_blank"
          >Bacherlor of Science in Computer Science with Business (University of
          Bath, UK).</a
        >
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>Summer 2016</template>
      <template #title>
        Interned as Web Developer at
        <a href="https://maxem.io/" target="_blank">Maxem Energy</a> (Amsterdam,
        The Netherlands).
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>October 2016</template>
      <template #endDate>May 2017</template>
      <template #title>
        Chaired the
        <a href="https://www.thesubath.com/peopleandplanet/" target="_blank">
          People and Planet Society</a
        >
        (University of Bath, UK).
      </template>
      <template #description>
        <p>
          As chair of the society I led a successful campaign that forced the
          <a
            href="https://www.bath.ac.uk/announcements/university-to-divest-from-direct-holdings-in-fossil-fuels/"
            target="_blank"
          >
            University of Bath to withdraw £500.000 in investments from the
            fossil fuel industry.
          </a>
        </p>
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>June 2017</template>
      <template #endDate>November 2017</template>
      <template #title>
        Interned as IT &amp; Software Engineer at
        <a href="https://pavegen.com/" target="_blank">Pavegen</a> (London, UK).
      </template>
      <template #description>
        <p>
          The third year of my bachelor's was a placement year, a year dedicated
          to work in industry.
        </p>
        <p class="mt-1">
          During the first internship of my placement year I advanced my
          <strong>Python</strong> skills with the books
          <a href="https://automatetheboringstuff.com/" target="_blank">
            <i>Automate the boring stuff with Python</i>
          </a>
          and
          <a href="https://effectivepython.com/" target="_blank">
            <i>Effective Python.</i>
          </a>
          I also started learning machine learning with the online course
          <a href="https://www.udemy.com/machinelearning/" target="_blank">
            <i>Machine Learning A-Z</i>
          </a>
          and the book
          <a
            href="https://www.manning.com/books/machine-learning-in-action"
            target="_blank"
          >
            <i>Machine Learning in Action.</i>
          </a>
        </p>
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>January 2018</template>
      <template #endDate>June 2018</template>
      <template #title>
        Interned as Software Engineer at
        <a href="https://evolution.ai/" target="_blank">Evolution AI</a>
        (London, UK).
      </template>
      <template #description>
        <p>
          During my second placement year internship, I coded the backend and
          frontend of a Natural Language Processing platform. I worked with
          <strong>Python</strong>, <strong>Flask</strong>, <strong>SQL</strong>,
          <strong>HTML</strong>, <strong>CSS</strong>,
          <strong>Javascript</strong> and <strong>Vue.js</strong>.
        </p>
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>Summer 2018</template>
      <template #title>
        Improved my knowledge of probability and statistics, linear algebra and
        calculus.
      </template>
      <template #description>
        <p>
          In order to meet the application requirements of machine learning
          master's, I undertook MIT OpenCourseWare online courses on Probability
          and Statistics, Linear Algebra and Calculus.
        </p>
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>October 2018</template>
      <template #endDate>May 2019</template>
      <template #title>
        Thesis: using machine learning to reduce deforestation (mark: 81%).
      </template>
      <template #description>
        <p>
          For the final year thesis of my Computer Science bachelor's, I
          implemented and evaluated various systems that make use of computer
          vision and machine learning techniques to automatically identify land
          use in rainforests based on satellite images.
        </p>
        <p>
          During my thesis I gained experience with the Python libraries
          <strong>NumPy</strong>, <strong>pandas</strong> and
          <strong>scikit-learn</strong>.
        </p>
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>June 2019</template>
      <template #title>
        Graduated from Bacherlor of Science in Computer Science with Business
        with first-class honours (average mark: 74.55%).
      </template>
    </TimelineItem>
    <TimelineItem>
      <template #startDate>August 2019</template>
      <template #endDate>Present</template>
      <template #title>
        Work for
        <a href="https://extinctionrebellion.nl/">Extinction Rebellion</a>
        (Amsterdam, The Netherlands).
      </template>
      <template #description>
        <p>
          Because of the pressing climate and ecological crisis, after finishing
          my bachelor's I declined the offer to do a master's in Machine
          Learning at the KTH Royal Institute of Technology and decided instead
          to work full time for Extinction Rebellion, one of the fastest growing
          and most powerful grassroots movements in the world.
        </p>
        <p>
          I primarily work as part of the tech team responsible for developing,
          implementing and maintaining the technical infrastructure of
          Extinction Rebellion Nederland. In this team, I
          <strong>
            lead the development of an
            <a
              href="https://github.com/xrnl/aginun/wiki/Purpose"
              target="_blank"
            >
              open source volunteer platform</a
            ></strong
          >, I
          <strong
            >ensure the effective and secure use of the member database and mass
            mailer</strong
          >, and I
          <strong>
            improve
            <a href="https://extinctionrebellion.nl/" target="_blank">
              the website</a
            ></strong
          >. I am also
          <strong>responsible for recruiting and assisting people</strong> to
          develop and maintain other systems, such as our self-hosted cloud
          service, encrypted email, wiki and live streaming system.
        </p>
        <p>
          In addition to my work in the tech team, I have given 15 talks to a
          total of 300 people as part of the outreach team, and I assit the
          integration team with increasing the retention rate of new members.
        </p>
      </template>
    </TimelineItem>
  </div>
</template>

<script>
import TimelineItem from "@/components/TimelineItem";

export default {
  name: "Timeline",
  components: {
    TimelineItem
  }
};
</script>

<style></style>
