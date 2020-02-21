$(document).ready(function () {

  homeServe();

    
  $(window).scroll(function () {
    $('#nav').slideDown();
    $(window).off('scroll');
  })

  $("#aboutBtn").on("click", function () {
    $('#contentWrapper').empty();
    aboutServe();
  });

  $("#contactBtn").on("click", function () {
    $('#contentWrapper').empty();
    contactServe();

  })

  $("#portBtn").on("click", function () {
    $('#contentWrapper').empty();
    portfolioServe();
    console.log('in')

  })

  $("#homeBtn").on("click", function () {
    $('#contentWrapper').empty();
    homeServe();
    console.log('in')

  })
});


function aboutServe() {

  $('#contentWrapper').html(

    `
      <div id="nav" class="d-f jc-c ai-c fz-jj mt-l">
        <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
          id="homeBtn">Home</button>
        <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
          id="portBtn">Portfolio</button>
        <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
          id="contactBtn">Contact</button>
      </div>

      <div class="d-f df-fdc">
        <div class="w-75 t-i">
          I'm a Web Developer based in the Greater Chicago area. Currently I am
          looking for positions working on the front end - HTML, CSS, JavaScript,
          and React are the tools I'm most comfortable working with.
        </div>
        <div class="w-75 t-i">
          I hold a Bachelors of Administration in Information Systems from the
          University of Cincinnati Lindner College of Business and I recently earned a
          certificate from Northwestern University's Trilogy Full Stack Web
          Development Boot Camp program, focusing on the MERN Stack.
        </div>
        <div class="w-75 t-i">
          In my free-time I enjoy playing music on my various instruments
          including my guitars, drum kit, and other small instruments.
          I am also a skiier, snowboarder, and skateboarder, and like to play golf and tennis.
        </div>
      </div>
    `
  );

}

function homeServe() {

  $('#contentWrapper').html(
    `
          <div class="KO">
            <div class="KOt">Welcome.</div>
          </div>
            
          <div id="nav" class="d-f jc-c ai-c fz-jj mt-l">
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="aboutBtn">About</button>
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="portBtn">Portfolio</button>
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="contactBtn">Contact</button>
          </div>

          <div class="d-f df-fdc ai-c">
            <div class="mt-l w-75 fz-j p-m t-i">
              Welcome to my personal website. The buttons will navigate you to various parts of the site -
              About you will direct you my background information. Portfolio will let you view
              all my past and current projects. Contact will lead yo to the
              the best ways to reach out to me should you want to, as well as a PDF of my Résumé.
            </div>
          </div>
        </div>
      `
  )
}

function portfolioServe() {


  $('#contentWrapper').html(

    `
    <div id="nav" class="d-f jc-c ai-c fz-jj mt-l">
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="homeBtn">Home</button>
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="portBtn">Portfolio</button>
            <button class="b-n bg-c-b-fc bg-c-db-hv bg-c-n c-db c-db-fc c-w-hv mr-s p-s td-n s-hv t-g-hv t-s-fc"
              id="contactBtn">Contact</button>
          </div>
  <section class="ac-c ji-c d-f df-fdc m-m mt-xxl h-f p-l">
    <div class="m-s ta-c fz-jj ts-i">Solo Projects</div>

    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Password-Generator/">
        <div class="c-db ta-c">Password Generator</div>
        <img class="i-fl mt-l" src="./assets/images/soon5.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Day-Planner/">
        <div class="c-db ta-c">Day Planner</div>
        <img class="i-fl mt-l" src="./assets/images/soon3.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Weather-Dashboard/">
        <div class="c-db ta-c">Weather Dashboard</div>
        <img class="i-fl mt-l" src="./assets/images/152-367x267.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Dev-Profile-Generator/">
        <div class="c-db ta-c">Profile Generator</div>
        <img class="i-fl mt-l" src="./assets/images/331-3648x2432.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/note-taker/">
        <div class="c-db ta-c">Note Taker</div>
        <img class="i-fl mt-l" src="./assets/images/4-5616x3744.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://da-burger-smk.herokuapp.com/">
        <div class="c-db ta-c">Database CLI with "Burgers"</div>
        <img class="i-fl mt-l" src="./assets/images/soon4.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://hot-restaurant-scottkumor.herokuapp.com/">
        <div class="c-db ta-c">Restaurant Reservations</div>
        <img class="i-fl mt-l" src="./assets/images/437-367x267.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://star-wars-scottkumor.herokuapp.com/">
        <div class="c-db ta-c">Create Your Own Star Wars Character</div>
        <img class="i-fl mt-l" src="./assets/images/537-2291x3450.jpg" />
      </a>
    </div>

    <div class="m-s ta-c fz-j ts-i">Collaborations</div>

    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://iedson.github.io/spotlight/">
        <div class="c-db ta-c">Spotlight</div>
        <img class="i-fl mt-l" src="./assets/images/spotlight.jpg" />
      </a>
    </div>
    <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://sovest.herokuapp.com/">
        <div class="c-db ta-c">Sovest</div>
        <img class="i-fl mt-l" src="./assets/images/main-logo.png" />
      </a>
    </div>


    
    <div class="mt-l ta-c"> My <a class="td-n bg-c-b-fc bg-c-db-hv c-db-fc c-db c-w-hv td-n s-hv t-g-hv t-s-fc" href="https://github.com/scottkumor">
      Github Page</a> is the best place to keep up to date with all my projects and endeavors. Feel free to preruse at your leisure.
    </div>
</section>
  `
  )
}

function contactServe() {

  $('#contentWrapper').html(
    `
        <div class="fz-j">
          <div class=""> My primary email is <a class="bg-c-b-fc bg-c-db-hv c-db-fc c-db c-w-hv td-n s-hv t-g-hv t-s-fc" href="mailto:scott.kumor1212@gmail.com">scott.kumor1212@gmail.com</a>. 
          I check my email regularly and usually reply within 1-2 business days.
        </div>
      `)
};

