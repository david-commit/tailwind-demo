import logo from '../images/logo.svg';
import heroImg from '../images/illustration-intro.svg';


function App() {
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
        </div>
      </nav>
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
      <section id="testimonials">
        {/* -- Heading and cards container */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">What's different about Manage?</h2>
          {/* -- Testimonials */}
          <div className="flex-flex-col mt-24 md:flex-row md:space-x-6">
            {/* -- Testimonial 1 -- */}
            <div className="flec flex-col oitems-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="" class='w-16 -mt-14' alt="" />
            </div>
          </div>
        </div>
      </section>
      What they’ve said Anisha Li “Manage has supercharged our team’s workflow.
      The ability to maintain visibility on larger milestones at all times keeps
      everyone motivated.” Ali Bravo “We have been able to cancel so many other
      subscriptions since using Manage. There is no more cross-channel confusion
      and everyone is much more focused.” Richard Watts “Manage allows us to
      provide structure and process. It keeps us organized and focused. I can’t
      stop recommending them to everyone I talk to!” Shanai Gough “Their
      software allows us to track, manage and collaborate on our projects from
      anywhere. It keeps the whole team in-sync without being intrusive.” Get
      Started Simplify how your team works today. Get Started Home Pricing
      Products About Us Careers Community Privacy Policy Updates in your inbox…
      Go Copyright 2020. All Rights Reserved
      <div class='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
