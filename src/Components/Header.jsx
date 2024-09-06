import {Link} from 'react-scroll'

const Header = () => {
  return (
    <div className= "text-gray-500 text-2xl flex justify-center items-center text-center w-full fixed top-0 left-0 z-50">  
        <Link className="hover:bg-primary w-full hover:text-white ease-in duration-300 p-6" to="catalogo" spy={true} smooth={true} offset={-50} duration={1000}>CATALOGO</Link>
        <Link className="hover:bg-primary w-full hover:text-white ease-in duration-300 p-6" to="about" spy={true} smooth={true} offset={-50} duration={1000}>SOBRE NOSOTROS</Link>
        <Link className="hover:bg-primary w-full hover:text-white ease-in duration-300 p-6" to="how to buy" spy={true} smooth={true} offset={-50} duration={1000}>¿COMO COMPRAR?</Link>
        <Link className="hover:bg-primary w-full hover:text-white ease-in duration-300 p-6" to="contact" spy={true} smooth={true} offset={-50} duration={1000}>CONTACTO</Link>   
    </div>
  )
}

export default Header