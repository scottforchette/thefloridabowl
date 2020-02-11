<template>
  <Layout>
    <div id="legal">
      <div id="legal-0">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Legal</h2>
          </div>
        </aside>
        <div id="legal-0-wrap">
          <div class="headline">
            <h1>
              Legal &
              Privacy
            </h1>
          </div>
        </div>
      </div>
      <div id="legal-1">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Introduction</h2>
          </div>
        </aside>
        <div id="legal-1-wrap">
          <h2>Please read carefully</h2>
          <div id="legal-1-content">
            <p>Please our read information carefully before you start using our services. They set out who we are, how we use information, your obligations to us and ours to you in connection with the platform and our services, the terms under which we can withdraw access to the services, and how to contact us.</p>
            <p>"We, Us, Our" refers to Digital Reality Corp Limited trading as Spec, registered in England with company number 09696838 and subject to English law. Our registered address is 42 Berkeley Square, Mayfair, London, W1J 5AW.</p>
          </div>
        </div>
      </div>
      <div id="legal-2">
        <aside class="aside-l">
          <div class="aside-title">
            <h2>Our Policies</h2>
          </div>
        </aside>
        <div id="legal-2-wrap">
          <ul>
            <li>
              <g-link to="/legal/terms-of-use/">
                <div class="legal-headline">
                  <h2>Terms of Use</h2>
                </div>
              </g-link>
            </li>

            <li>
              <g-link to="/legal/privacy-policy/">
                <div class="legal-headline">
                  <h2>Privacy Policy</h2>
                </div>
              </g-link>
            </li>

            <li>
              <g-link to="/legal/accessibility/">
                <div class="legal-headline">
                  <h2>Accessibility</h2>
                </div>
              </g-link>
            </li>
            <a href="/404/" class="button">
              <span>INQUIRIES</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Legal"
  }
};
</script>

<style lang="scss">
#legal-1-wrap {
  h2 {
    font-weight: 500;
    line-height: 1.45;
  }
}

#legal-1-content {
  transition: border-color 0.6s;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 501px) {
  #legal-1-content {
    padding: 5vw 18vw 5vw 0;

    p {
      margin: 0 0 2vw;
      font-size: 1.2vw;
      letter-spacing: -0.01vw;
      line-height: 2.02381vw;
    }
  }

  #legal {
    > div {
      display: flex;
    }
  }

  #legal-0 {
    .aside-title {
      padding: 6vw 0 0;
    }
  }

  #legal-0-wrap,
  #legal-1-wrap,
  #legal-2-wrap {
    width: 84vw;
  }

  #legal-0-wrap {
    padding: 4.75vw 7.5vw 12.75vw 2.75vw;
  }

  #legal-1-wrap {
    padding: 0 6vw 6vw 2.75vw;

    h2 {
      font-size: 1.4vw;
      letter-spacing: -0.04vw;
    }
  }

  #legal-2-wrap {
    padding: 0 6vw 12vw 2.75vw;

    li {
      padding: 0 0 6vw;
    }

    .legal-headline {
      font-size: 3vw;
      letter-spacing: -0.1vw;
      line-height: 1.12;
      margin: 0 0 0.75vw;
    }
  }
}

@media (max-width: 500px) {
  #legal-0-wrap {
    padding: 20vw 5vw;
  }
  #legal-1-content {
    padding: 0 0 20vw;
  }

  #legal-0 {
    .aside-l {
      display: none;
    }
  }

  #legal-1 {
    margin: 6vw 5.4vw 0;
  }

  #legal-1-wrap {
    h2 {
      font-size: 7vw;
      letter-spacing: -0.1vw;
      margin: 0 0 8.5vw;
    }
  }

  #legal-1-content {
    p {
      font-size: 5vw;
      line-height: 8.5vw;
      margin: 0 0 6vw;
    }
  }

  #legal-2 {
    margin: 35vw 5.4vw;

    li {
      margin: 0 0 10vw;
    }
  }

  .legal-headline {
    font-size: 7vw;
    letter-spacing: -0.09vw;
    line-height: 1.3;
    margin: 0 0 3vw;
  }
}
</style>