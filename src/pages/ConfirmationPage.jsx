import { useLocation } from 'react-router-dom';  
import SuccessMessage from '../components/SuccessMessage'; // Pastikan path ini benar  

export default function ConfirmationPage({ darkMode }) {  
  const location = useLocation();  
  const queryParams = new URLSearchParams(location.search);  
  const ticketNumber = queryParams.get('ticket');  

  return (  
    <div className={`container mx-auto px-4 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>  
      <div className="text-center">  
        <h1 className="text-3xl font-bold mb-4">Ticket Support</h1>  
        {ticketNumber ? (  
          <SuccessMessage ticketNumber={ticketNumber} />  
        ) : (  
          <p>No ticket number found.</p>  
        )}  
      </div>  
    </div>  
  );  
}  