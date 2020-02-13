<template>
  <footer id="footer">
    <div id="footer-wrap">
      <ul>
        <li>
          <g-link to="/legal/terms-of-use" class="link">Terms of Use</g-link>
          <g-link to="/legal/privacy-policy" class="link">Privacy Policy</g-link>
          <g-link to="/legal/accessibility" class="link">Accessibility</g-link>
        </li>

        <li>
          <g-link to="/careers/" class="link">Careers</g-link>
          <g-link to="/legal/" class="link">Legal</g-link>
          <g-link to="/donate/" class="link">Donate</g-link>
        </li>

        <li>
          <g-link to="/newsletter/" class="link">Newsletter</g-link>
          <a href="https://unfltrdsports.com/sitemap.xml" class="link">Sitemap</a>
        </li>
      </ul>
      <div class="footer-bottom">
        © 2020 Unfltrdsports. All rights reserved.
        <a
          href="https://www.instagram.com/atomsagency/"
        >Built by Atoms.</a>
      </div>
    </div>
  </footer>
</template> 

<style lang="scss">
#footer {
  transition: border-color 0.6s;
  border-top: 1px solid var(--border-color);
}

#footer-wrap {
  overflow: hidden;
  ul {
    display: flex;
  }

  li {
    display: flex;
    flex-direction: column;
  }
}

.footer-bottom {
  opacity: 0.6;
}

.link {
  line-height: 1;
}

@media (min-width: 501px) {
  #footer-wrap {
    padding: 10vw 0 5vw 44.5vw;

    ul {
      padding: 0 0 6vw;
    }

    li {
      width: 45vw;

      a {
        display: inline-block;

        padding: 0 0 2vw;
      }
    }
  }

  .footer-bottom { 
    line-height: 1;
  } 
}

@media (max-width: 500px) {
  #footer {
    margin: 10vw 0 0;
  }

  #footer-wrap {
    padding: 24vw 5.4vw 12vw;

    ul {
      width: 120vw;
      padding: 0 0 20vw;
      flex-wrap: wrap;
    }

    li {
      width: 45%;

      a {
        padding: 0 0 6vw;
      }
    }
  }

  .link {
    font-size: 4.27vw; 
  }

  .footer-bottom {
    font-size: 4.27vw; 
    line-height: 1;

    a {
      display: none;
    }
  }
}
</style>