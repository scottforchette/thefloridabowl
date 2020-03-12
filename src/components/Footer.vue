<template>
  <footer id="footer">
    <div id="footer-wrap">
      <div id="f-0">
        <div class="f-0-1">
          <g-link to="/">the florida bowl</g-link>
        </div>
        <div class="f-0-2">
          <div class="f-lbl">SITEMAP</div>
          <ul class="footer-content">
            <li>
              <g-link to="/">Home</g-link>
            </li>
            <li>
              <g-link to="/latest/">Latest</g-link>
            </li>
            <li>
              <g-link to="/contact/">Contact</g-link>
            </li>
          </ul>
        </div>
        <div class="f-0-3">
          <div class="f-lbl">SOCIAL</div>
          <ul class="footer-content">
            <li>
              <a href="https://facebook.com/thefloridabowl">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/thefloridabowl">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2020 The Florida Bowl. All rights reserved.</div>
        <div>
          <a href="https://www.instagram.com/atomsagency/">Site by Atoms.</a>
        </div>
      </div>
    </div>
  </footer>
</template> 

<style lang="scss">
#footer {
  background: #000;
  color: #fff;

  a {
    display: table;
  }
}

#f-0 {
  display: flex;
}

#footer-wrap {
  overflow: hidden;

  ul {
    display: flex;
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
}

.f-0-3 ul,
.f-0-2 ul {
  display: flex;
  flex-direction: column;
}

@media (min-width: 501px) {
  #footer-wrap {
    padding: 5vw;
  }

  .f-0-1 {
    width: 25.6vw;

    a {
      font-size: 2vw;
    }
  }

  .f-0-2,
  .f-0-3 {
    width: 15.6vw;
  }

  .f-0-3 ul,
  .f-0-2 ul {
    font-size: 1.6vw;
    line-height: 2.5vw;
  }

  .f-lbl {
    font-size: 1.1vw;
    line-height: 1.6vw;
    padding: 0 0 1.2vw;
  }

  #f-0 {
    margin: 0 0 10vw;
  }
}

@media (max-width: 500px) {
  #f-0 {
    flex-direction: column;
    flex-wrap: wrap;
  }

  #footer {
    margin: 10vw 0 0;
  }

  #footer-wrap {
    padding: 24vw 5.4vw 12vw;
  }

  .f-0-1 {
    margin: 0 0 10vw;
  }

  .f-0-2,
  .f-0-3 {
    padding: 0 0 6vw;
  }

  .f-0-3 {
    padding: 0 0 20vw;
  }
  .footer-bottom {
    flex-direction: column;
  }

  .f-lbl {
    font-size: 5.1vw;
    line-height: 7.6vw;
    padding: 0 0 3.2vw;
  }

  .f-0-3 ul,
  .f-0-2 ul {
    font-size: 5vw;
    line-height: 8vw;
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