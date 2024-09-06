import wspIcon from '../../public/wsp-icon.png';
import gmailIcon from '../../public/gmail-icon.png';

const Contact = () => {
  return (
    <div id='contact' className="text-center bg-secondary text-white p-4">
        <h2 className="text-3xl p-3">Contacto</h2>
        <p>Contactanos via Mail o WhatsApp Para cualquier duda, cotizacion o compra</p>
        <div className='w-52 my-6 mx-auto grid grid-cols-2 gap-4'>
          <img src={wspIcon} alt="WhatsApp Icon" />
          <img src={gmailIcon} alt="Gmail Icon" />    
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil consectetur reiciendis error dolores nemo amet voluptates</p>
        </div>
      

    </div>
  )
}

export default Contact