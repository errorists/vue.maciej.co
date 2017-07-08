<template>
  <main id="caseItondo">

    <CaseHero>
      <ul slot='headerRole'>
        <li><h5>Role</h5></li>
        <li><h5>Lead designer</h5></li>
      </ul>
      <ul slot='headerScope'>
        <li><h5>Scope</h5></li>
        <li><h5>UI, UX and Interaction Design</h5></li>
        <li><h5>Art Direction, Branding</h5></li>
        <li><h5>Animation, Illustration</h5></li>
        <li><h5>Prototyping</h5></li>
      </ul>
      <ul slot='headerDeliverables'>
        <li><h5>Deliverables</h5></li>
        <li><h5>Guidelines</h5></li>
        <li><h5>Mockups</h5></li>
        <li><h5>Prototype</h5></li>
      </ul>
      <ul slot='headerDuration'>
        <li><h5>Duration</h5></li>
        <li><h5>4 months</h5></li>
      </ul>
      <h3 slot='headerTitle'>Itondo</h3>
      <ul slot='headerChallenges'>
        <li><h5>Challenges</h5></li>
        <li><div><span>1</span><p>Creating brand and personality for a digital e-commerce product.</p></div></li>
        <li><div><span>2</span><p>Coming up with a design that respects art and its audience</p></div></li>
        <li><div><span>3</span><p>Delivering a robust AR experience.</p></div></li>
      </ul>
      <div slot='headerPic' class="h-pic"></div>
    </CaseHero>

    <article>
      We began the project in a team of three designers with interviewing Karen and Dirk, who came to us with their idea for the product. From the beginning, we all felt the augmented reality tech could have a transformative effect on the online art trade industry. So that’s what we started with, a rough working proof of concept for the AR module that allowed us to rally interest around the idea and get a feeling of how well it worked.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Augmented<br />Reality</h3>
      <div slot='cardContent'>
        <p>For the Live Preview Mode to work, you’d have to first print out an A4 sized marker, place it where you’d like to hang the painting and voila, Itondo would instantly replace the marker with the chosen artwork on screen and even match its dimensions. Once you see the surprisingly magical transformation happen you’d be hard pressed to imagine shopping for art without it.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a5.jpg' alt="AR Empty" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a6.jpg' alt="AR Painting" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <article>
      The next step was to create a brand identity for Itondo. Between its name which translates to a round painting and the AR module, I had plenty enough to work with. For the app icon/logotype, I went with a round camera iris with brush strokes in place of blades. I knew from the start that I want the interface to be simple in form and for that to work I needed a dedicated typeface. After some trial and error, I’ve chosen <a href="http://ffmark.com"><span class="highlighter">FF Mark</span></a>, a neo-grotesque with wide proportions and a warmer tone than other geometric sans serifs. Paired with the icon it gave me a perfect read on where to go further with the design, and that was round shapes, restrained use of warm tones and unrestrained white space. Now for the last piece of the puzzle, I introduced watercolors, the single detail that would complete the brand.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Brand</h3>
      <div slot='cardContent'>
        <p>I’ve created a number of illustrations to accompany the Itondo onboarding process. I wanted them to be an extension of the interface and not to be confused with art, hence the simple blocky appearance and warm tones. The magenta colour was a choice of the client and I’ve grown to really like it. I feel like for this design any bold color could work.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item picture"><img src='../assets/a8.jpg' alt="Illustration" width="1160" height="1024"/></figure>
        <figure class="item picture"><img src='../assets/a9.jpg' alt="App Icon" width="1160" height="1024"/></figure>
        <figure class="item picture"><img src='../assets/a10.jpg' alt="Colour and type" width="1160" height="1024"/></figure>
      </Flickity>
    </Card>

    <article>
      Having a working AR module and visual identity in place, I could proceed to design the rest of the app. My idea was to create a blank canvas to showcase the paintings – once you have great content you don’t really need to compensate with the UI. Still, I wanted to inject some character into the UI and that’s where the brand elements like watercolors, typography and creative use of animation came into play. I’m super proud of the result, which balances the modernist simplicity you’d find in art galleries with some offbeat details more common to modern apps. We’ve also convinced the client to pursue an iPhone version, providing them with an exact timeframe, cost and making a strong case for its wide adoption that could help tap into a broader market. For the iPhone app to work all I had to do really was to transition from collection to table based layouts and fine tune some details.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Design</h3>
      <div slot='cardContent'>
        <p>The interface uses standard iOS components like popovers, tab bars, and navigation controllers, only customized to appear airier. I’ve chosen to transition to a dark lightroom for viewing individual paintings so that art buyers could get a better feeling of the colors and details on screen. To facilitate art discovery, I’ve created a dedicated space that lists paintings not only by gallery and artists but also emotion, color or size. I also love how the artist profiles came out — we even built our own framework that samples the colors in profile picture and mixes them with a random watercolor below.</p>
      </div>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Itondo Collection View" width="1280" height="960"/></figure>
        <figure class="item portrait"><img src='../assets/a2.jpg' alt="Itondo Artist View" width="960" height="1280"/></figure>
        <figure class="item tablet"><img src='../assets/a4.jpg' alt="Itondo Search View" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Itondo Art View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/a7.jpg' alt="Itondo Welcome View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <article>
      For this project, I’ve skipped the use of wireframes and went straight ahead to prototyping the real thing. The layout was simple enough and I knew precisely what I want with the design. What I didn’t know was how to connect the different pieces of the interface together. That’s where <a href="https://framer.com" target="_blank"><span class="highlighter">Framer</span></a>, a code based prototyping tool, helped me figure out the connections – the delightful micro-interactions that tied it all together. I didn’t foresee animation playing such a huge role in establishing the look and feel of the app but after prototyping my ideas, testing and showing them around we all felt that animation was pivotal and worth the added effort.
    </article>

    <Card class="light">
      <h3 slot='cardTitle'>Prototype</h3>
      <div slot='cardContent'>
        <p>I believe motion has a certain storytelling quality and done properly it can give you a sense of spatial awareness and guide you through the interface. I’ve introduced animation at a very early stage of design and it has influenced the way the entire app is laid out. In a way prototyping Itondo gave me insight into how the app is used by real people and the confidence to proceed with ideas that otherwise I’d find too frivolous or against established patterns.</p>
      </div>
      <div slot='cardStatic' class='gallery static'>
        <figure class='item tablet-video'><video width="682" height="512" loop autoplay playsinline><source src='../assets/itondo.mp4' type="video/mp4" /></video></figure>
      </div>
    </Card>

    <LinkGroup>
      <router-link to="/" slot='backLink' class='button'><span class="highlighter">Go back</span></router-link>
      <a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" slot='storeLink' class='button' target="_blank"><span class="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></a>
      <router-link to="/mirage/" slot='nextLink' class='button'><span class="highlighter">Next</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
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
	background-image: linear-gradient(to top, #FDCAF1 0%, #E6DEE9 100%);
}
.h-pic {
	width: 1380px; height: 750px;
	background: url('../assets/itondo-hero.jpg') no-repeat 0 0;
	background-size: contain;
}
.card {
	margin-bottom: 10vw;
}
.card h3 {
	width: 20vw;
	min-width: 240px;
}
.gallery::before {
	width: 70vw;
	margin-left: 30vw;
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}
.tablet-video, video {
	width: 682px; height: 512px;
}
.picture {
	width: 640px; height: 572px;
	padding: 30px;
	background-color: white;
}
.item {
	box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

@media (max-width: 960px) {
	article {
		margin: 0 10vw 15vh 10vw;
	}
  .gallery::before {
			width: 100vw;
			margin-left: 0;
	}
}
@media (max-width: 680px) {
  .tablet-video, video {
		width: 512px; height: 384px;
	}
  .picture {
		width: 580px; height: 512px;
		padding: 0;
	}
}
@media (max-width: 560px) {
	.h-pic {
		margin-left: -18.5rem;
	}
	.tablet-video, video {
		width: 480px; height: 360px;
	}
	.picture {
		width: 464px; height: 410px;
	}
}
@media (max-width: 500px) {
	.tablet-video, video {
		width: 416px; height: 312px;
	}
	.picture {
		width: 406px; height: 358px;
	}
}
@media (max-width: 420px) {
	.tablet-video, video {
		width: 320px; height: 240px;
	}
	.picture {
		width: 290px; height: 256px;
	}
	article {
		margin: 0 5vw 15vh 5vw;
		font-size: 1.25rem;
	}
}
@media (max-width: 320px) {
	.tablet-video, video {
		width: 288px; height: 216px;
	}
}

</style>
