<template>
  <main id="home">
    <Hero/>
    <Card id="status">
      <h3 slot='cardTitle'>status</h3>
      <div slot='cardContent'>
        <p><em>2018&mdash;present</em>I'm the lead designer on Status chat and browser Swarms. Status is an open source secure messaging platform that allows you to transact and interact with the decentralised web, while Swarms are ideas which interdisciplinary teams band around and get them built. Together, we've created novel ways for people to monetise their attention, sticker markets where artists can fully own and sell their work or tools to build and discover the new Web 3.0.</p>
				<div class="buttons">
          <a href="http://www.status.im" target="_blank" class="button"><span class="highlighter">Get Status</span>
          <svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Web Design</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phoneLarge"><img src='../assets/s1.jpg' alt="Status Chat" width="750" height="1624"/><h6>Sending ETH in chat</h6><span>01</span></figure>
        <figure class="item phoneLarge"><img src='../assets/s2.jpg' alt="Status Browser" width="750" height="1624"/><h6>Browsing ÐApp Store</h6><span>02</span></figure>
        <figure class="item phoneLarge"><img src='../assets/s3.jpg' alt="Status Wallet" width="750" height="1624"/><h6>Transacting in crypto wallet</h6><span>03</span></figure>
        <figure class="item phoneLarge"><img src='../assets/s4.jpg' alt="Status Profile" width="750" height="1624"/><h6>User Profile</h6><span>04</span></figure>
      </Flickity>
    </Card>

    <Card id="aintu">
      <h3 slot='cardTitle'>aintu</h3>
      <div slot='cardContent'>
        <p><em>2017</em>The Aintu team hired me as a product design consultant whose responsibility was to improve the user experience of their digital products. To help this, I created and tested numerous prototypes, putting forward-thinking ideas into motion while caring for the existing interface. I also helped nurture a culture of design thinking inside the team and helped other designers shape the visual language of the company.</p>
				<div class="buttons">
          <a href="https://itunes.apple.com/in/app/ringring/id1260897284" target="_blank" class="button"><span class="highlighter">Get it on the App Store</span>
          <svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>UI / UX Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phoneLarge"><img src='../assets/r1.jpg' alt="Aintu Home" width="750" height="1624"/><h6>Home</h6><span>01</span></figure>
        <figure class="item phoneLarge"><img src='../assets/r2.jpg' alt="Aintu Store" width="750" height="1624"/><h6>Browsing store offers</h6><span>02</span></figure>
        <figure class="item phoneLarge"><img src='../assets/r3.jpg' alt="Aintu Map" width="750" height="1624"/><h6>Finding nearby stores</h6><span>03</span></figure>
        <figure class="item phoneLarge"><img src='../assets/r4.jpg' alt="Aintu Cart" width="750" height="1624"/><h6>Collecting offers</h6><span>04</span></figure>
      </Flickity>
    </Card>

    <Card id="opera">
      <h3 slot='cardTitle'>opera</h3>
      <div slot='cardContent'>
        <p><em>2016&mdash;2017</em>I was the design lead on the Mac redesign of Opera browser. Together in a small team of designers and developers we conceptualised and put in motion a redesign of the interface focused on bringing the mobile app experiences and apps inside the desktop browser, including lessons learned from previous well-received concepts like <a href="https://www.opera.com/computer/neon" target="_blank" title="Opera Neon"><span class="highlighter">Opera Neon</span></a>. We also gave the interface a fresh new look and laid the groundwork for its future expansion.</p>
				<div class="buttons">
          <a href="http://www.opera.com" target="_blank" class="button"><span class="highlighter">Download Opera</span><svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item desktop"><img src='../assets/f1.jpg' alt="Opera Browser" width="2048" height="1440"/><h6>Redesigned window</h6><span>01</span></figure>
        <figure class="item desktop"><img src='../assets/f2.jpg' alt="Messenger Panel" width="2048" height="1440"/><h6>Messaging slideover</h6><span>02</span></figure>
        <figure class="item desktop"><img src='../assets/f3.jpg' alt="Speed Dial" width="2048" height="1440"/><h6>Speed Dial and dark theme</h6><span>03</span></figure>
      </Flickity>
    </Card>

    <Card id="explain">
      <h3 slot='cardTitle'>explain everything</h3>
      <div slot='cardContent'>
        <p><em>2015&mdash;2016</em>Explain Everything is a digital interactive whiteboard made for educators, students, and creators to communicate their ideas, teach and learn from others. For over a year I worked as a product designer on the team. Together we conceptualised, designed and communicated new groundbreaking features like real-time collaboration, apps for the iPhone and Apple TV and the introduction of Discover, a content sharing portal for all things made with Explain Everything.</p>
        <div class="buttons">
          <a href="https://itunes.apple.com/app/id1020339980?mt=8" target="_blank" class="button"><span class="highlighter">Get it on the App Store</span><svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
          <a href="https://play.google.com/store/apps/details?id=com.explaineverything.explaineverything" target="_blank" class="button"><span class="highlighter">Get it on Google Play</span><svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Web Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/e1.jpg' alt="Explain Everything Canvas View" width="1920" height="1440"/><h6>Creating and editing documents</h6><span>01</span></figure>
        <figure class="item phone"><img src='../assets/e2.jpg' alt="Explain Everything iPhone" width="750" height="1334"/><h6>iPhone prototype</h6><span>02</span></figure>
        <figure class="item tablet"><img src='../assets/e3.jpg' alt="Explain Everything Projects View" width="1920" height="1440"/><h6>Redesigned project canvas</h6><span>03</span></figure>
      </Flickity>
    </Card>

    <Card id="mosaic">
      <h3 slot='cardTitle'>mosaic</h3>
      <div slot='cardContent'>
        <p><em>2016</em>Mosaic is a side project we’ve made with a friend. It's a deliberately simple app for creating pixel art on the iPhone and iPad. It has just the right tools and limitations needed to comfortably draw pixel artworks on touch screens or use the camera to turn photos into a pixelated canvas. I designed the entire product and the cute little brand accompanying it.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Brand</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/m1.jpg' alt="Mosaic Welcome Screen" width="750" height="1334"/><h6>Welcoming new users</h6><span>01</span></figure>
        <figure class="item tablet"><img src='../assets/m2.jpg' alt="Mosaic Art View" width="1920" height="1440"/><h6>Drawing pixel art</h6><span>02</span></figure>
        <figure class="item phone"><img src='../assets/m3.jpg' alt="Mosaic Collection View" width="750" height="1334"/><h6>Browsing pixel artworks</h6><span>03</span></figure>
        <figure class="item phone"><img src='../assets/m4.jpg' alt="Mosaic Camera View" width="750" height="1334"/><h6>Snapping pixelated pictures</h6><span>04</span></figure>
      </Flickity>
    </Card>

    <Card id="itondo">
      <h3 slot='cardTitle'>itondo</h3>
      <div slot='cardContent'>
        <p><em>2014&mdash;2015</em>Itondo is an app for discovering, buying and trying out art. It allows anyone to browse and buy from a curated selection of artwork from world-renowned artists and galleries and see how they’d look like in their home or office with the help of an AR powered Live Preview mode. I was the lead designer on the startup, tasked by their founders with shaping the brand, visual language and interface of the project.</p>
        <div class="buttons">
          <a href="https://itunes.apple.com/au/app/itondo/id1004978847?mt=8" class='button' target="_blank"><span class="highlighter">Get it on the App Store</span><svg width="17" height="8" viewBox="0 0 17 8">
          <path d="M10.5 4.74999C10.7761 4.74999 11 4.97385 11 5.24999V7.06573C11 7.46508 11.4451 7.70328 11.7774 7.48176L16.6256 4.24961C16.8037 4.13086 16.8037 3.86912 16.6256 3.75038L11.7773 0.518226C11.4451 0.296708 11 0.534904 11 0.934252V2.74999C11 3.02614 10.7761 3.24999 10.5 3.24999H1C0.585786 3.24999 0.25 3.58578 0.25 3.99999C0.25 4.41421 0.585786 4.74999 1 4.74999H10.5Z"/>
          </svg></a>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Art Direction</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Itondo Collection View" width="1920" height="1440"/><h6>Exploring art in store</h6><span>01</span></figure>
        <figure class="item phone"><img src='../assets/a2.jpg' alt="Itondo Welcome Screen" width="750" height="1334"/><h6>Onboarding new users</h6><span>02</span></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Itondo Art View" width="1920" height="1440"/><h6>Zooming in on artwork details</h6><span>03</span></figure>
        <figure class="item portrait"><img src='../assets/a4.jpg' alt="Itondo Artist Screen" width="1152" height="1536"/><h6>Discovering artists</h6><span>04</span></figure>
      </Flickity>
    </Card>
    <Credits/>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Flickity from '@/components/Flickity.vue'
import Credits from '@/components/Credits.vue'

export default {
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
    Flickity,
    Credits
  },
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

ul {
	max-width: 20vw;
	font-size: 0;
}
#explain .content h3 {
  min-width: 300px;
}
#mosaic p {
  margin-bottom: 3vh;
}
@media (max-width: 960px) {
  ul {
		margin: 1.5rem 0 1rem 0;
		max-width: 100%;
	}
	ul li {
		display: inline-block;
		margin-right: 1rem;
	}
}
@media (max-width: 560px) {
	.buttons {
		flex-direction: column;
	}
}
</style>
