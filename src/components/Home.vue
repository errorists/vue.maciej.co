<template>
  <main id="home">
    <Hero/>

    <Card id="kaala">
      <h3 slot='cardTitle'>kaala</h3>
      <div slot='cardContent'>
        <p><em>2020&mdash;present</em>Kaala is a payments app that's built on top of blockchain. It combines the best of both worlds: the ease of use and familiarity of traditional mobile banking, with the instant speed and low cost of Ethereum sidechains. I worked on the project as its founding designer from the beginning, doing the designs for the app, the brand, website, all marketing collateral and more.</p>
        <div class="buttons">
          <Button link='https://www.kaala.app' label='Get Kaala'></Button>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Web Design</h4></li>
        <li><h4>Motion Design</h4></li>
        <li><h4>Illustration</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phoneLarge"><img src='../assets/k1.jpg' alt="Status Chat" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/k2.jpg' alt="Status Browser" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/k3.jpg' alt="Status Wallet" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/k4.jpg' alt="Status Profile" width="750" height="1624"/></figure>
      </Flickity>
    </Card>

    <Card id="status">
      <h3 slot='cardTitle'>status</h3>
      <div slot='cardContent'>
        <p><em>2018&mdash;present</em>I’m the lead designer for Status chat and browser teams. Status is an open source secure messaging platform that allows you to transact and interact with the Ethereum ecosystem. Together in small interdisciplinary swarms, we’ve created unique new ways for people to monetise their attention, enable community money, community law and through privacy, preserve culture.</p>
				<div class="buttons">
          <Button link='https://www.status.im' label='Get Status'></Button>
          <Button link='https://design.status.im' label='Status Design'></Button>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Art Direction</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Web Design</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phoneLarge"><img src='../assets/s1.jpg' alt="Status Chat" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/s2.jpg' alt="Status Browser" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/s3.jpg' alt="Status Wallet" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/s4.jpg' alt="Status Profile" width="750" height="1624"/></figure>
      </Flickity>
    </Card>

    <Card id="aintu">
      <h3 slot='cardTitle'>aintu</h3>
      <div slot='cardContent'>
        <p><em>2017</em>The Aintu team hired me as a product design consultant whose responsibility was to improve the user experience of their digital products. To help this, I created and tested numerous prototypes, putting forward-thinking ideas into motion while iterating on the existing interface. I also helped nurture a culture of design thinking inside the team and helped other designers shape the visual language of the company.</p>
				<div class="buttons">
          <Button link='https://itunes.apple.com/in/app/ringring/id1260897284' label='Get it on the App Store'></Button>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>UI / UX Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phoneLarge"><img src='../assets/r1.jpg' alt="Aintu Home" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/r2.jpg' alt="Aintu Store" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/r3.jpg' alt="Aintu Map" width="750" height="1624"/></figure>
        <figure class="item phoneLarge"><img src='../assets/r4.jpg' alt="Aintu Cart" width="750" height="1624"/></figure>
      </Flickity>
    </Card>

    <Card id="opera">
      <h3 slot='cardTitle'>opera</h3>
      <div slot='cardContent'>
        <p><em>2016&mdash;2017</em>I was the design lead on the redesign of Opera browser. Together in a team of designers and engineers we conceptualised and put in motion a redesign of the interface, focused on bringing mobile app experiences inside the desktop browser. This included lessons learned from previous well-received concepts like <a href="https://www.opera.com/computer/neon" target="_blank" title="Opera Neon"><span class="highlighter">Opera Neon</span></a>. We also gave the interface a fresh new look and laid the groundwork for its future expansion.</p>
				<div class="buttons">
          <Button link='http://www.opera.com' label='Download Opera'></Button>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Motion Design</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item desktop"><img src='../assets/f1.jpg' alt="Opera Browser" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f2.jpg' alt="Messenger Panel" width="2048" height="1440"/></figure>
        <figure class="item desktop"><img src='../assets/f3.jpg' alt="Speed Dial" width="2048" height="1440"/></figure>
      </Flickity>
    </Card>

    <Card id="explain">
      <h3 slot='cardTitle'>explain everything</h3>
      <div slot='cardContent'>
        <p><em>2015&mdash;2016</em>Explain Everything is an award-winning digital interactive whiteboard made for educators, students, and creators to communicate their ideas, teach and learn from others. For over a year I worked as a product designer on the team. Together we conceptualised, designed and communicated new groundbreaking features like real-time collaboration, apps for the iPhone and Apple TV and the introduction of Discover: a content sharing portal for all things made with Explain Everything.</p>
        <div class="buttons">
          <Button link='https://itunes.apple.com/app/id1020339980?mt=8' label='Get it on the App Store'></Button>
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
        <figure class="item tablet"><img src='../assets/e1.jpg' alt="Explain Everything Canvas View" width="1920" height="1440"/></figure>
        <figure class="item phone"><img src='../assets/e2.jpg' alt="Explain Everything iPhone" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/e3.jpg' alt="Explain Everything Projects View" width="1920" height="1440"/></figure>
      </Flickity>
    </Card>

    <Card id="itondo">
      <h3 slot='cardTitle'>itondo</h3>
      <div slot='cardContent'>
        <p><em>2014&mdash;2015</em>Itondo is an app for discovering, buying and trying out art. It allows anyone to browse and buy from a curated selection of artworks from world-renowned artists and galleries and see how they’d look like in their space with the help of an AR powered Live Preview mode. I was the lead designer on the startup, employed by its founders to shape the brand, visual language and the entire end-to-end user experience of the product.</p>
        <div class="buttons">
          <Button link='https://itunes.apple.com/au/app/itondo/id1004978847?mt=8' label='Get it on the App Store'></Button>
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
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Itondo Collection View" width="1920" height="1440"/></figure>
        <figure class="item phone"><img src='../assets/a2.jpg' alt="Itondo Welcome Screen" width="750" height="1334"/></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Itondo Art View" width="1920" height="1440"/></figure>
        <figure class="item portrait"><img src='../assets/a4.jpg' alt="Itondo Artist Screen" width="1152" height="1536"/></figure>
      </Flickity>
    </Card>
    <Credits/>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
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
    Button,
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
}
#kaala::after {
  content: '1';
}
#status::after {
  content: '2';
}
#aintu::after {
  content: '3';
}
#opera::after {
  content: '4';
}
#explain::after {
  content: '5';
}
#itondo::after {
  content: '6';
}
#explain .content h3 {
  min-width: 300px;
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
