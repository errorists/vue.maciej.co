<template>
  <footer>
    <div class="ama">
      <h3>ama</h3>
      <aside>
        <section>
          <p><em>how can I get in touch</em></p><p><a href="mailto:hi@maciej.co" title="Maciej's mailbox"><span class="highlighter">hi@maciej.co</span></a> / <a href="https://get.status.im/user/0x04579634892d7b7280e54d5a0b098aa2b3c5cd90514a94382b10604846e5615c16cfe3401fdd05218d3205bdc2b61d8c454bfe6836652823022ac1677b0848d171" target="_blank" title="Status"><span class="highlighter">status</span></a> / <a href="https://twitter.com/spaceape" target="_blank" title="Twitter"><span class="highlighter">twitter</span></a></p>
        </section>
        <section>
          <p><em>how do I pronounce your name</em></p><p>easy, it's 'much-yay'. Yay!</p>
        </section>
        <section>
          <p><em>what interests you</em></p><p>composing electronic music, modernism, graphic novels, street fashion, skateboarding</p>
        </section>
        <section>
          <p><em>where are you based</em></p><p>I work remotely from places around the globe, my hometown being Wroclaw, Poland</p>
        </section>
        <section>
          <p><em>are you available for work</em></p><p>currently no, I'm not taking any new work</p>
        </section>
        <section>
          <p><em>do you speak at events</em></p><p>I tried, I'm too shy for that</p>
        </section>
        <section>
          <p><em>do you have a process</em></p><p>not really, I tend to improvise and adapt depending on the project</p>
        </section>
        <section>
          <p><em>should designers code</em></p><p>dunno, I sure do, you can see some of my code at <a href="https://github.com/errorists" target="_blank" title="GitHub"><span class="highlighter">github</span></a></p>
        </section>
      </aside>
    </div>
    <div class="pics">
      <figure><img src='../assets/p1.jpg' alt="Me" width="1440" height="1000"/></figure>
      <figure><img src='../assets/p2.jpg' alt="Synths" width="1000" height="1500"/></figure>
      <figure><img src='../assets/p3.jpg' alt="Teamplay" width="1379" height="1000"/></figure>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@import
'../scss/variables';

footer {
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
footer::before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 5%;
  width: 95%; height: 100%;
  background: linear-gradient(130deg, hsl(180,10%,97%), hsl(180,20%,100%));
  border-radius: 3px 0 0 0;
}
.ama {
  width: 100%; height: 100%;
  display: flex;
  justify-content: space-between;
}
h3 {
  width: 17%;
  margin: 4vh 0 0 8%;
}
aside {
  width: 75%;
  margin: 4vh 5% 5rem 0;
  display: flex;
  flex-direction: column;
}
aside section {
  display: flex;
}
aside em {
  margin: 0;
}
section p:first-child {
  text-align: right;
  margin-right: 2rem;
  flex-basis: 30%;
}
section p:nth-child(2) {
  flex-basis: 70%;
}
.pics {
  width: 100%; height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  padding-left: 25%;
}
.pics::before {
  content: '©2019 Maciej Zadykowicz';
  position: absolute;
  max-width: 17vw;
  left: 8%;
  bottom: 3rem;
  font: 1.125rem/1.25 $body;
  color: $text-third;
}
.pics figure {
  margin: 0 2vw 0 0;
}
.pics figure:first-of-type {
  align-self: flex-start;
}
.pics figure:last-of-type {
  margin-right: 5vw;
}
.pics figure img {
  width: 100%; height: auto;
}
@media (max-width: 960px) {
  .ama {
    flex-direction: column;
  }
  footer::before {
    width: 100%;
    left: 0;
  }
  h3 {
    width: 95%;
    margin: 5rem 0 0 5%;
  }
  aside {
    width: 90%;
    margin: 3rem 5% 5rem 5%;
  }
  aside section {
    flex-direction: column;
    margin-bottom: 1rem;
  }
  section p:first-child {
    text-align: left;
    margin-right: 0;
  }
  .pics {
    padding: 0;
    margin-bottom: 5rem;
    flex-wrap: wrap;
  }
  .pics figure {
    margin: 0 0 5vw 0;
  }
  .pics figure:first-of-type {
    width: 75%;
    margin-left: auto;
  }
  .pics figure:nth-of-type(2) {
    width: 45%;
  }
  .pics figure:last-of-type {
    width: 50%;
    margin-right: 0;
    align-self: flex-start;
  }
  .pics::before {
    max-width: 90vw;
    left: 5%;
    bottom: -2rem;
  }
}

</style>
