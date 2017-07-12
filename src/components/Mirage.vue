<template>
  <main id="caseMirage" class="caseStudy">

    <CaseHero>
      <ul slot='headerRole'>
        <li><h5>Role</h5></li>
        <li><h5>Lead designer</h5></li>
      </ul>
      <ul slot='headerScope'>
        <li><h5>Scope</h5></li>
        <li><h5>UI, UX and Interaction Design</h5></li>
        <li><h5>Art Direction, Branding</h5></li>
        <li><h5>Animation</h5></li>
        <li><h5>Prototyping</h5></li>
      </ul>
      <ul slot='headerDeliverables'>
        <li><h5>Deliverables</h5></li>
        <li><h5>Wireframes</h5></li>
        <li><h5>Guidelines</h5></li>
        <li><h5>Mockups</h5></li>
        <li><h5>Prototype</h5></li>
      </ul>
      <ul slot='headerDuration'>
        <li><h5>Duration</h5></li>
        <li><h5>5 months</h5></li>
      </ul>
      <h3 slot='headerTitle'>Mirage</h3>
      <ul slot='headerChallenges'>
        <li><h5>Challenges</h5></li>
        <li><div><span>1</span><p>Complexity in designing for every possible streaming music and radio service.</p></div></li>
        <li><div><span>2</span><p>Aligning our vision of a new, premium visual language with an external agency.</p></div></li>
        <li><div><span>3</span><p>Proprietary hardware.</p></div></li>
      </ul>
      <div slot='headerPic' class="h-pic"></div>
    </CaseHero>

    <article>
      For this app redesign, I teamed up with <a href="https://www.linkedin.com/in/jakubandrzejewski/"><span class="highlighter ">Jacob</span></a>, a UX designer. Together we started by interviewing existing users of Mirage to get a better feeling on what works and what needs to be changed within the current app. The answers we got were conclusive: the app was highly functional but cumbersome, unattractive and difficult to use. What followed was a thorough process of rethinking each and every single one of the different components and features; building and testing user flows; prototyping different layouts and ways to tell the story of a premium product through visual language. The outcome was a completely new Mirage app that facilitated music discovery, allowed for easy navigation and queue management while sporting a super sleek and contemporary design.
    </article>

    <Card class="dark">
      <h3 slot='cardTitle'>Design</h3>
      <div slot='cardContent'>
        <p>With the sheer complexity of this app, that quickly escalated to hundreds of views, I needed a more organized way to approach the redesign. I started by creating a modular system of building blocks, basically designing every component of Mirage, before assembling them together, not unlike LEGO bricks. I built and tested numerous prototypes this way, simply reordering the blocks each time I started anew, without the fear of going back to square one or having to redraw each view from the start. I soon began to see the puzzles click, patterns emerge and the finalized interface take shape.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/b1.jpg' alt="Mirage Now Playing View" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/b2.jpg' alt="Mirage Collection View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/b3.jpg' alt="Mirage Album View" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/b4.jpg' alt="Mirage Search View" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/b5.jpg' alt="Mirage Album View" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <article>
      For the visual design, I decided on a dark theme throughout the app from the beginning. The interface is meant to be used exclusively indoors and the dark backgrounds greatly reduce screen glare in dim lighting. To achieve a desired luxurious feel I’ve decided on a palette of golden hues with a bright amber for the main color and a rectangular, somewhat retro-hifi typeface. To accompany that I designed the Mirage icon with a stylized type treatment that meant to look like a capital letter M as seen through a mirage. Unfortunately, the design, while loved by the client, proved to be too far off what the external brand agency had in mind. The corrected result still came out great with warm tones exchanged for brand blue and the nostalgic design cues replaced with a design more reminiscent of the hardware.
    </article>

    <div class="overflowWrap">
    <Card class="dark">
      <h3 slot='cardTitle'>Brand</h3>
      <div slot='cardContent'>
        <p>While the underlying architecture remained pretty much the same, the shift from my intended design inspired by old hi-fi’s, to one more resembling the updated identity for Mirage, brought an interesting change in its character and reception. The original to the left was described as warmer, more luxurious and homely. The revised to the right, more Apple-like, smarter and sophisticated. I'll let you be the judge of that yourself.</p>
      </div>
      <div slot='cardStatic' class='gallery static'>
        <figure class="item phone comparison">
          <figure class="item phone before"><img src='../assets/b7.jpg' alt="Original Icon" width="750" height="1334"/></figure>
          <figure class="icon before"><img src='../assets/icon-old.png' alt="Original Icon" width="368" height="368"/></figure>
          <img src='../assets/b6.jpg' alt="Mirage Comparison" width="750" height="1334"/>
          <figure class="icon after"><img src='../assets/icon-new.png' alt="Revised Icon" width="368" height="368"/></figure>
          <figure class="item phone after"><img src='../assets/b8.jpg' alt="Original Icon" width="750" height="1334"/></figure>
        </figure>
      </div>
    </Card>
    </div>

    <article>
      The core idea of the app is to control music playback in the house. Call it a touch-based remote control and you’re not too far off. After some research and sketching out user flows we quickly found out that quick navigation was the most important part in providing a pleasant experience. I’ve prototyped different approaches to handling navigation and in the end opted for thumb-based tab bars and liberal use of gestures. The interface proved to be instantly familiar while making the most frequent interactions easily reachable with a thumb.
    </article>

    <Card class="dark">
      <h3 slot='cardTitle'>Prototype</h3>
      <div slot='cardContent'>
        <p>I’ve created many prototypes like the ones below while working on Mirage. Most of them illustrated a solution to a problem that came out during the design. One such prototype I made was for the multi-selection interface, the part of the app used most often to queue tracks, where you could swipe along multiple table cells in different views while having a persistent bar at the bottom to perform actions on your selection. Needless to say, I’m super stoked about this elegant solution.</p>
      </div>
      <div slot='cardStatic' class='gallery static'>
        <figure class="item phone"><video width="375" height="667" loop autoplay playsinline><source src='../assets/navigation.mp4' type="video/mp4" /></video></figure>
        <figure class="item phone"><video width="375" height="667" loop autoplay playsinline><source src='../assets/select.mp4' type="video/mp4" /></video></figure>
      </div>
    </Card>

    <LinkGroup>
      <router-link to="/" slot='backLink' class='button'><span class="highlighter">Go back</span></router-link>
      <router-link to="/itondo/" slot='nextLink' class='button'><span class="highlighter">Next</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
    </LinkGroup>

  </main>
</template>

<script>
import CaseHero from '@/components/CaseHero.vue'
import Card from '@/components/Card.vue'
import LinkGroup from '@/components/LinkGroup.vue'
import Credits from '@/components/Credits.vue'
import Flickity from 'vue-flickity'

export default {
  mounted () {
    var navBar = document.getElementById('navigationBar')
    navBar.classList.remove("expanded")
  },
  data () {
    return {
      flickityOptions: {
        freeScroll: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.032,
        friction: 0.28
      }
    }
  },
  components: {
    CaseHero,
    Card,
    LinkGroup,
    Credits,
    Flickity
  }
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

.h-right {
	background-image: linear-gradient(to top, hsl(190,75%,70%) 0%, hsl(190,55%,80%) 100%);
}
.h-pic {
  width: 1440px; height: 750px;
	background: url('../assets/mirage-hero.jpg') no-repeat 0 0;
	background-size: contain;
}
.gallery::before {
  background-color: hsl(190,55%,80%);
	background-image: linear-gradient(340deg, hsl(200,75%,70%) 0%, hsl(180,55%,80%) 100%);
}
.item {
	box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
}
.overflowWrap {
	width: 100%; height: 100%;
	overflow: hidden;
}
.comparison {
	position: relative;
	margin: 10vh 0;
	overflow: visible;
}
.comparison .icon {
	width: 184px; height: 184px;
	position: absolute;
	z-index: 50;
}
.comparison .icon.before {
	top: 356px; left: -85px;
}
.comparison .icon.after {
	top: 300px; right: -85px;
}
.comparison .phone.before {
	position: absolute;
	top: 25px; left: -500px;
	margin: 0;
}
.comparison .phone.after {
	position: absolute;
	top: -25px; right: -500px;
	margin: 0;
}

@import
'../scss/cases';

@media (max-width: 960px) {
  .overflowWrap {
  	margin-bottom: -7vh;
  }
}
@media (max-width: 680px) {
	video {
		width: 300px; height: 534px;
	}
	.comparison .icon {
		width: 146px; height: 146px;
	}
	.comparison .icon.before {
		top: 280px; left: -65px;
	}
	.comparison .icon.after {
		top: 260px; right: -65px;
	}
	.comparison .phone.before {
		left: -380px;
	}
	.comparison .phone.after {
		right: -380px;
	}
}
@media (max-width: 560px) {
	.h-pic {
		margin-left: -2rem;
	}
  video {
		width: 281px; height: 500px;
	}
	.comparison .icon {
		width: 138px; height: 138px;
	}
	.comparison .icon.before {
		top: 270px; left: -60px;
	}
	.comparison .icon.after {
		top: 240px; right: -60px;
	}
	.comparison .phone.before {
		left: -345px;
	}
	.comparison .phone.after {
		right: -345px;
	}
}
@media (max-width: 500px) {
	video {
		width: 240px; height: 427px;
	}
	.comparison .icon {
		width: 120px; height: 120px;
	}
	.comparison .icon.before {
		top: 225px; left: -55px;
	}
	.comparison .icon.after {
		top: 205px; right: -55px;
	}
	.comparison .phone.before {
		left: -305px;
	}
	.comparison .phone.after {
		right: -305px;
	}
}
@media (max-width: 420px) {
	video {
		width: 188px; height: 334px;
	}
	.comparison .icon {
		width: 92px; height: 92px;
	}
	.comparison .icon.before {
		top: 180px; left: -40px;
	}
	.comparison .icon.after {
		top: 160px; right: -40px;
	}
	.comparison .phone.before {
		left: -240px;
	}
	.comparison .phone.after {
		right: -240px;
	}
}
@media (max-width: 320px) {
	video {
		width: 167px; height: 300px;
	}
	.comparison .icon {
		width: 82px; height: 82px;
	}
	.comparison .icon.before {
		top: 160px; left: -35px;
	}
	.comparison .icon.after {
		top: 140px; right: -35px;
	}
	.comparison .phone.before {
		left: -210px;
	}
	.comparison .phone.after {
		right: -210px;
	}
}

</style>
