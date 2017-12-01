<template>
  <main id="home">

    <Hero/>

    <Card id="itondo" class="light">
      <h3 slot='cardTitle'>Itondo</h3>
      <div slot='cardContent'>
        <p><span>2014&mdash;2015</span>Itondo is an iOS app for discovering, buying and trying out art. It allows anyone with an iPad to browse a curated selection of artworks from world-renowned artists and galleries and see how they’d look like in their home, office or art space with the help of an augmented reality powered Live Preview mode. Once settled on the perfect piece, they can buy it directly without leaving the app.</p>
        <div class="buttons">
          <router-link to="/itondo/" class='button'><span class="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
          <a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" class='button' target="_blank"><span class="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Itondo Collection View" width="1280" height="960"/></figure>
        <figure class="item portrait"><img src='../assets/a2.jpg' alt="Itondo Artist View" width="960" height="1280"/></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Itondo Art View" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <Card id="mirage" class="dark">
      <h3 slot='cardTitle'>Mirage</h3>
      <div slot='cardContent'>
        <p><span>2015</span>Mirage is the app companion to the range of wireless speakers and media players of the same name, made by Autonomic Controls in the US. It’s the digital hub of all music in the house, bridging the gap between different service providers and radio stations with fine-grained control for different rooms, users, and programming schedule.</p>
        <div class="buttons">
          <router-link to="/mirage/" class='button'><span class="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/b1.jpg' alt="Mirage Now Playing View" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/b2.jpg' alt="Mirage Collection View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/b3.jpg' alt="Mirage Album View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <Card id="explain" class="light">
      <h3 slot='cardTitle'>Explain Everything</h3>
      <div slot='cardContent'>
        <p><span>2015&mdash;2016</span>Explain Everything is a digital interactive whiteboard made for educators, students, and creators to communicate their ideas, teach and learn from others. For over a year I worked as product designer on the team. Together we conceptualized, designed and communicated new groundbreaking features like real-time collaboration, apps for the iPhone and Apple TV and the introduction of Discover, a content sharing portal for all things made with Explain Everything.</p>
        <div class="buttons">
          <a href="https://itunes.apple.com/app/id1020339980?mt=8" target="_blank" class="button"><span class="highlighter">Get it on the App Store</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
          <a href="https://play.google.com/store/apps/details?id=com.explaineverything.explaineverything" target="_blank" class="button"><span class="highlighter">Get it on Google Play</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Web Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Animation</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/c2.jpg' alt="Explain Everything Collection View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/c3.jpg' alt="Explain Everything iPhone" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/c1.jpg' alt="Explain Everything Art View" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <Card id="juice" class="dark">
      <h3 slot='cardTitle'>Juice</h3>
      <div slot='cardContent'>
        <p><span>2014</span>Juice is a fitness tracking app built with casual, daily use in mind. It tracks all movement, translates it into calories burnt and overlays the distance taken onto a map. Using the app should feel like having a journal for daily activity: a record of how healthy each day was, of where and when you traveled. The app also allows competing against others in achieving these goals.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>UI Design</h4></li>
				<li><h4>Interaction Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Animation</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/e1.jpg' alt="Juice Steps View" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/e2.jpg' alt="Juice Activity View" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/e3.jpg' alt="Juice Distance View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <Card id="mosaic" class="light">
      <h3 slot='cardTitle'>Mosaic</h3>
      <div slot='cardContent'>
        <p><span>2016&mdash;Present</span>Mosaic is an app we’ve made with a friend for creating pixel art on the iPhone and iPad. It has just the right tools and limitations needed to easily draw artworks or use the camera and turn photos into your canvas. Mosaic also allows for easy printing and sharing and nicely integrates with messaging apps turning the keyboard into a drawing canvas.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Brand</h4></li>
        <li><h4>Animation</h4></li>
        <li><h4>Icons</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/d2.jpg' alt="Mosaic Welcome Screen" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/d1.jpg' alt="Mosaic Art View" width="1280" height="960"/></figure>
        <figure class="item phone"><img src='../assets/d3.jpg' alt="Mosaic Collection View" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

		<Card id="opera" class="light">
      <h3 slot='cardTitle'>Opera</h3>
      <div slot='cardContent'>
        <p><span>2016&mdash;2017</span>I was the design lead on the Mac redesign of Opera browser. Together in a small team of designers and developers we conceptualized and put in motion a redesign of the interface focused on adding chat apps like Messenger and Whatsapp inside collapsible panels allowing users to browse and use their most frequently used apps at the same time. We also gave the interface a fresh new look and laid the groundwork for its future expansion.</p>
				<div class="buttons">
          <a href="http://www.opera.com" target="_blank" class="button"><span class="highlighter">Download Opera</span><svg width="9" height="14" viewBox="0 0 9 14">
          <path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item desktop"><img src='../assets/f1.jpg' alt="Opera Browser" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f2.jpg' alt="Messenger Panel" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f3.jpg' alt="Speed Dial" width="2048" height="1440"/></figure>
      </Flickity>
    </Card>

  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Flickity from '@/components/Flickity.vue'

export default {
  mounted () {
    var navBar = document.getElementById('navigationBar');
    navBar.className += " expanded";
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
    Hero,
    Card,
    Flickity
  },
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

.content p span {
  color: $yellow;
  margin-right: 1rem;
}
.buttons {
	margin-top: 2rem;
	display: flex;
	justify-content: flex-start;
}
ul {
	max-width: 20vw;
	font-size: 0;
}

#itondo .gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}
#itondo .item {
	box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

#mirage .gallery::before {
  background-color: hsl(190,55%,80%);
  background-image: linear-gradient(340deg, hsl(200,75%,70%) 0%, hsl(180,55%,80%) 100%);
}
#mirage .item {
  box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
}

#explain .gallery::before {
  background-color: hsl(220, 40%, 70%);
  background-image: linear-gradient(5deg, hsl(220, 40%, 70%) 0%, hsl(145, 25%, 90%) 100%);
}
#explain .item {
  box-shadow: 0 15px 60px hsla(220,60%,30%, 0.35);
}
#explain .content h3 {
  margin-left: 8%;
  width: 17%;
  min-width: 232px;
}

#mosaic .gallery::before {
  background-color: hsl(320,85%,80%);
  background-image: linear-gradient(340deg, hsl(320,85%,80%) 0%, hsl(230,45%,85%) 100%);
}
#mosaic .item {
  box-shadow: 0 15px 60px hsla(300,40%,30%, 0.35);
}

#juice .gallery::before {
  background-color: hsl(120,80%,75%);
  background-image: linear-gradient(340deg, hsl(120,80%,75%) 0%, hsl(65,95%,65%) 100%);
}
#juice .item {
  box-shadow: 0 15px 60px hsla(150,70%,0%, 0.4);
}

#opera .gallery::before {
  background-color: hsl(355,90%,75%);
  background-image: linear-gradient(340deg, hsl(335,90%,75%) 0%, hsl(15,80%,85%));
}
#opera .item {
  box-shadow: 0 15px 60px hsla(355,70%,30%, 0.4);
}

#juice p, #mosaic p {
  margin-bottom: 3vh;
}

@media (min-width: 1600px) {
	#explain .content h3 {
		margin-left: 10%;
		width: 15%;
	}
}
@media (max-width: 960px) {
  #explain .content h3 {
		margin-left: 0;
    width: 100%;
	}
  ul {
		margin: 1.5rem 0 1rem 0;
		max-width: 100%;
	}
	ul li {
		display: inline-block;
		margin-right: 2.5vw;
	}
}
@media (max-width: 560px) {
	.buttons {
		flex-direction: column;
	}
}
</style>
