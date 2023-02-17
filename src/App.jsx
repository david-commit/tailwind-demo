import logo from '../images/logo.svg';
import heroImg from '../images/illustration-intro.svg';
import anisha from '../images/avatar-anisha.png';
import ali from '../images/avatar-ali.png';
import richard from '../images/avatar-richard.png';
import facebook from '../images/icon-facebook.svg';
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
import hamburger from '../images/icon-hamburger.svg';

function App() {

  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu');

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  });
  
  return (
    <div className='App'>
      {/* -- NAVBAR -- */}
      <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <img src={logo} alt='' />
          </div>
          <div className='hidden space-x-6 md:flex'>
            <a href='#' class='hover:text-DarkGrayishBlue'>
              Pricing
            </a>
            <a href='#' class='hover:text-DarkGrayishBlue'>
              Product
            </a>
            <a href='#' class='hover:text-DarkGrayishBlue'>
              About Us
            </a>
            <a href='#' class='hover:text-DarkGrayishBlue'>
              Careers
            </a>
            <a href='#' class='hover:text-DarkGrayishBlue'>
              Comunity
            </a>
          </div>
          <a
            href='#'
            className='hidden p-3 px-6 text-white bg-BrightRed rounded-full md:flex hover:bg-DarkBlue'
          >
            Get Started
          </a>
          {/* -- hamburger -- */}
          <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
            <img src={hamburger} alt="" />
          </button>
          {/* -- Mobile Menu */}
          <div id="menu" className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
      {/* -- HERO -- */}
      <div className='hero'>
        <div className='container flex flex-col-reverse md:flex-row items-center mx-auto p-6 mt-10'>
          <div className='hero-txt mb-32 space-y-12 md:w-1/2'>
            <h1 class='max-w-md text-4xl font-bold text-center md:5xl md:text-left'>
              Bring everyone together to build better products.
            </h1>
            <p class='max-w-sm text-DarkGrayishBlue text-center  md:text-left'>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className='flex justify-center md:justify-start'>
              <button class='flex p-3 bg-BrightRed rounded-full text-white hover:bg-DarkBlue'>
                Get Started
              </button>
            </div>
          </div>
          <div className='hero-img md:max-w-1/2'>
            <img src={heroImg} alt='' />
          </div>
        </div>
      </div>
      <div className='container flex flex-col mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        <div className='md:w-1/2 space-y-12'>
          <h2 className='text-4xl text-center font-bold text-DarkBlue md:text-left'>
            What's different about Manage?
          </h2>
          <p class='text-DarkGrayishBlue text-center md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams
          </p>
        </div>
        {/* -- NUMBERED LIST -- */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* -- List Item 1 -- */}
          <div className='flex flex-col md:space-x-6 md:flex-row'>
            {/* -- HEADING -- */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-1 text-white rounded-full md:py-1 bg-BrightRed'>
                  01
                </div>
                <h3 class='text-base font-bold md:hidden'>
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class='hidden mb-4 text-lg font-bold md:block'>
                Track company-wide progress
              </h3>
              <p class='text-DarkGrayishBlue'>
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/* -- List Item 2 -- */}
          <div className='flex flex-col md:space-x-6 md:flex-row'>
            {/* -- HEADING -- */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-1 text-white rounded-full md:py-1 bg-BrightRed'>
                  02
                </div>
                <h3 class='text-base font-bold md:hidden'>
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class='hidden mb-4 text-lg font-bold md:block'>
                Advanced built-in reports
              </h3>
              <p class='text-DarkGrayishBlue'>
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          {/* -- List Item 3 -- */}
          <div className='flex flex-col md:space-x-6 md:flex-row  '>
            {/* -- HEADING -- */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent '>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-1 text-white rounded-full md:py-1 bg-BrightRed'>
                  03
                </div>
                <h3 class='text-base font-bold md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class='hidden mb-4 text-lg font-bold md:block '>
                Everything you need in one place
              </h3>
              <p class='text-DarkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>{' '}
        </div>
      </div>
      {/* -- TESTIMONIALS --  */}
      <section id='testimonials'>
        {/* -- Heading and cards container */}
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
          <h2 className='text-4xl font-bold text-center'>
            What's different about Manage?
          </h2>
          {/* -- Testimonials */}
          <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
            {/* -- Testimonial 1 -- */}
            <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray md:w-1/3'>
              <img src={anisha} class='w-16 -mt-14' alt='' />
              <hs className='text-lg font-bold'>Anisha Li</hs>
              <p className='text-sm text-DarkGrayishBlue'>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* -- Testimonial 2 -- */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray md:flex md:w-1/3'>
              <img src={ali} class='w-16 -mt-14' alt='' />
              <hs className='text-lg font-bold'>Ali Bravo</hs>
              <p className='text-sm text-DarkGrayishBlue'>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            {/* -- Testimonial 3 -- */}
            <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray md:flex md:w-1/3'>
              <img src={richard} class='w-16 -mt-14' alt='' />
              <hs className='text-lg font-bold'>Richard Watts</hs>
              <p className='text-sm text-DarkGrayishBlue'>
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>
          {/* -- Button -- */}
          <div className='flex justify-center my-16'>
            <button class='flex  px-6 py-2 bg-BrightRed rounded-full text-white hover:bg-DarkBlue'>
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section id='cta' class='bg-BrightRed'>
        <div class='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
          <h2 class='text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left'>
            Simplify how your team works today
          </h2>
          <div>
            <a
              href='#'
              class='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900'
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <footer class='bg-VeryDarkBlue'>
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
          {/* -- Logo and icons -- */}
          <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
            {/* --LOGO -- */}
            <img src={logo} alt='' />
            <div className='flex justify-center space-x-4'>
              <a href='#'>
                <img src={facebook} class='h-8' alt='' />
              </a>
              <a href='#'>
                <img src={youtube} class='h-8' alt='' />
              </a>
              <a href='#'>
                <img src={twitter} class='h-8' alt='' />
              </a>
              <a href='#'>
                <img src={pinterest} class='h-8' alt='' />
              </a>
              <a href='#'>
                <img src={instagram} class='h-8' alt='' />
              </a>
            </div>
          </div>
          {/* list container */}
          <div class='flex justify-around space-x-32'>
            <div class='flex flex-col space-y-3 text-white'>
              <a href='#' class='hover:text-brightRed'>
                Home
              </a>
              <a href='#' class='hover:text-brightRed'>
                Pricing
              </a>
              <a href='#' class='hover:text-brightRed'>
                Products
              </a>
              <a href='#' class='hover:text-brightRed'>
                About
              </a>
            </div>
            <div class='flex flex-col space-y-3 text-white'>
              <a href='#' class='hover:text-brightRed'>
                Careers
              </a>
              <a href='#' class='hover:text-brightRed'>
                Community
              </a>
              <a href='#' class='hover:text-brightRed'>
                Privacy Policy
              </a>
            </div>
          </div>
          {/* -- Input Container -- */}
          <div class='flex flex-col justify-between'>
            <form>
              <div class='flex space-x-3'>
                <input
                  type='text'
                  class='flex-1 px-4 rounded-full focus:outline-none'
                  placeholder='Updated in your inbox'
                />
                <button class='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                  Go
                </button>
              </div>
            </form>
            <div class='hidden text-white md:block'>
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
