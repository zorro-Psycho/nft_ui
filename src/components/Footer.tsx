import { SocialIcon } from 'react-social-icons'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="pb-10 mt-10 bg-[rgb(24,104,183)] pt-10 font-poppins text-white">
      <Container>
        <div className="grid grid-cols-1 gap-x-24 gap-y-10 text-center lg:grid-cols-2 lg:text-left">
          <div>
            <h5 className="text-xl font-medium">Stay in the loop</h5>
            <p className="mt-3 text-gray-100">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for
              navigating OpenSea.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                name="newsletter"
                id="newsletter"
                className="flex-1 rounded-xl border-transparent py-3 text-center font-sans text-black shadow focus:border-gray-500 sm:text-left"
                placeholder="Your email address"
              />
              <button className="flex-none rounded-xl border-footer-button bg-footer-button px-8 py-3 font-sans font-medium text-white shadow hover:brightness-110">
                Sign up
              </button>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-medium">Join the community</h5>

            <div className="mb-4 mt-4 inline-flex gap-x-2">
              {['twitter', 'instagram', 'reddit', 'youtube', 'email'].map((social) => (
                <SocialIcon
                  key={social}
                  url="#"
                  network={social}
                  className="[&_svg]:!rounded-xl [&_svg]:border [&_svg]:border-footer-button [&_svg]:hover:brightness-110"
                  fgColor="#fff"
                  bgColor="rgb(32,129,226)"
                />
              ))}
            </div>
          </div>
        </div>
       
      </Container>
    </footer>
  )
}


