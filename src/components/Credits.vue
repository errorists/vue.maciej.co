<template>
  <footer>
    <h3>About</h3>
    <div>
      <section>
        <p>My name is Maciej, pronounced ‘much-yay’. I’m a designer, engineer, musician and friend making things on the Internet. He/Him</p>
        <figure><img src='../assets/p1.jpg' alt="Me" width="975" height="750"/></figure>
      </section>
      <section>
        <p>I compose electronic music, skateboard, read and write graphic novels, enjoy art and enthuse over fashion.</p>
        <figure><img src='../assets/p2.jpg' alt="Synths" width="1000" height="1500"/></figure>
      </section>
      <section>
        <p>My best work was done together with great people, teams and companies. I’d like to thank you all, you know who you are.</p>
        <figure><img src='../assets/p3.jpg' alt="Teamplay" width="975" height="750"/></figure>
      </section>
      <section>
        <p>I live and work remotely from my home studio in Wrocław, Poland. Currently, I’m not available for new work and speaking engagements.</p>
        <figure><img src='../assets/p4.jpg' alt="Office" width="1125" height="750"/></figure>
      </section>
    </div>
    <aside>
      <p><a href="mailto:hi@maciej.co" title="Maciej's mailbox"><span class="highlighter">hi@maciej.co</span></a> • <a href="https://read.cv/soso" target="_blank" title="Read.cv"><span class="highlighter">Read.cv</span></a> • <a href="https://twitter.com/spaceape" target="_blank" title="Twitter"><span class="highlighter">Twitter</span></a> • <a href="https://github.com/errorists" target="_blank" title="GitHub"><span class="highlighter">GitHub</span></a> • <a href="https://eth.af/so-so" target="_blank" title="ENS username"><span class="highlighter">so-so.eth</span></a></p>
      <p><em>©2022 Maciej Zadykowicz</em></p>
    </aside>
  </footer>
</template>

<style lang="scss" scoped>

@import
'../scss/variables';

footer h3 {
  margin: 0 0 3rem 7%;
}
footer div {
  width: 91%;
  display: flex;
  margin: 0 2% 5vh 7%;
}
footer section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
footer figure {
  margin-top: 2vw;
}
footer section:first-of-type {
  flex: 6.5;
  margin-right: 2vw;
}
footer section:nth-of-type(2) {
  flex: 5;
   margin-right: 2vw;
}
footer section:nth-of-type(3) {
  flex: 6.5;
   margin-right: 2vw;
}
footer section:nth-of-type(4) {
  flex: 7.5;
}
aside {
  display: flex;
  justify-content: space-between;
  margin: 0 2% 5vh 7%;
}
aside em {
  margin: 0;
}

@media (max-width: 960px) {
  footer div {
    width: 90%;
    margin: 0 5% 5vh 5%;
    flex-wrap: wrap;
  }
  footer h3 {
    margin: 0 2% 5vh 5%;
  }
  footer section {
    flex-direction: column-reverse;
  }
  footer figure {
    margin: 5vh 0 5vw 0;
  }
  footer section:first-of-type {
    min-width: 47.5%;
    flex: 0;
    margin: 0 5% 5vw 0;
  }
  footer section:nth-of-type(2) {
    min-width: 47.5%;
    flex: 0;
    margin: 0 0 5vw 0;
  }
  footer section:nth-of-type(3) {
    min-width: 47.5%;
    flex: 0;
    margin: 0 5% 0 0;
  }
  footer section:nth-of-type(4) {
    min-width: 47.5%;
    flex: 0;
    margin: 0 0 0 0;
  }
  aside {
    margin: 0 5% 5vh 5%;
  }
}
@media (max-width: 480px) {
  footer section:first-of-type {
    min-width: 100%;
    flex: 0;
    margin: 0 0 8vh 0;
  }
  footer section:nth-of-type(2) {
    min-width: 100%;
    flex: 0;
    margin: 0 0 8vh 0;
  }
  footer section:nth-of-type(3) {
    min-width: 100%;
    flex: 0;
    margin: 0 0 8vh 0;
  }
  footer section:nth-of-type(4) {
    min-width: 100%;
    flex: 0;
    margin: 0 0 5vh 0;
  }
  aside {
    flex-direction: column;
  }
  aside em {
    display: block;
    margin-top: 1rem;
  }
}


</style>
