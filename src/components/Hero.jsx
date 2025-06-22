import { logo } from '../assets'
import github from '../assets/github.svg'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center '>

      <nav className='flex justify-between items-center w-full mb-7 pt-5'>

        <img src={logo} alt="sumz_logo" className='w-28 object-contain cursor-pointer' />
        <button type='button'
          onClick={() => window.open(
           'https://github.com/Ali-Ashjaa'
          )}
        >
         <img src={github} alt="Github" />
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with 
        <br className='max-md:hidden' />
        <span className='orange_gradient'> SumzUp </span>
      </h1>
      <h2 className='desc'>
        SumzUp transforms lengthy articles into clear, concise summaries with AI-powered precision.
      </h2>
      
    </header>
  )
}

export default Hero