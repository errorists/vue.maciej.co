<template>
  <footer>
    <h3>about</h3>
    <div>
      <section>
        <p>My name is Maciej, pronounced ‘much-yay’. I’m a designer, engineer, friend and musician making things on the Internet.</p>
        <figure><img src='../assets/p1.jpg' alt="Me" width="975" height="750"/></figure>
      </section>
      <section>
        <p>I compose electronic music, skateboard, read and write graphic novels, enjoy art and enthuse over street fashion.</p>
        <figure><img src='../assets/p2.jpg' alt="Synths" width="1000" height="1500"/></figure>
      </section>
      <section>
        <p>I’m a team player, my best work was done together with great people and companies. I’d like to thank you all, you know who you are.</p>
        <figure><img src='../assets/p3.jpg' alt="Teamplay" width="975" height="750"/></figure>
      </section>
      <section>
        <p>I live and work remotely from my home studio in Wrocław, Poland. Currently, I’m not available for new work and speaking engagements.</p>
        <figure><img src='../assets/p4.jpg' alt="Office" width="1125" height="750"/></figure>
      </section>
    </div>
    <aside>
      <p><a href="mailto:hi@maciej.co" title="Maciej's mailbox"><span class="highlighter">hi@maciej.co</span></a> • <a href="https://get.status.im/user/0x044d48860e863a926e5db44ca466c1bfcccb36a8887c6c3ed00d3433b438fa21506174bb73dbbe1ef57b225075848bebbcfdbad5837f0372f93869d51e489463c6" target="_blank" title="Status"><span class="highlighter">Status</span></a> • <a href="https://twitter.com/spaceape" target="_blank" title="Twitter"><span class="highlighter">Twitter</span></a> • <a href="https://github.com/errorists" target="_blank" title="GitHub"><span class="highlighter">GitHub</span></a></p>
      <p><em>©2021 Maciej Zadykowicz</em></p>
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
