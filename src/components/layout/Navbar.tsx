import * as Dialog from '@radix-ui/react-dialog';
import { Flex } from '@radix-ui/themes';
import logo from '../../assets/images/logo-symbol.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src={logo} alt='' className='h-8 w-auto' />
        <h1 className='font-bold'>Your Logo</h1>
      </div>
      <ul className='hidden md:flex items-center gap-10 text-gray-300'>
        <li>
          <a href='#' className='hover:text-orange-500'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-orange-500'>
            Service
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-orange-500'>
            Projects
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-orange-500'>
            Testimonials
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-orange-500'>
            FAQ
          </a>
        </li>
      </ul>
      ``
      {/* Mobile Menu */}
      <Dialog.Root>
        <Dialog.Trigger className='md:hidden'>☰</Dialog.Trigger>
        <Dialog.Content>
          <Flex>
            <div className='flex flex-col gap-4 absolute right-0  bg-white'>
              <a href='#' className='hover:text-orange-500'>
                About
              </a>
              <a href='#' className='hover:text-orange-500'>
                Service
              </a>
              <a href='#' className='hover:text-orange-500'>
                Projects
              </a>
              <a href='#' className='hover:text-orange-500'>
                Testimonials
              </a>
              <a href='#' className='hover:text-orange-500'>
                FAQ
              </a>
            </div>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
      <button class='bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-full text-sm font-semibold'>
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;
