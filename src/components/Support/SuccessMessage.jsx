export default function SuccessMessage({ ticketNumber, email }) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Support Ticket Created Successfully!
        </h2>
        <p className="text-lg mb-2">Your ticket number is:</p>
        <p className="text-3xl font-mono font-bold text-green-700 mb-4">
          {ticketNumber}
        </p>
        <p className="text-gray-600">
          We will contact you shortly at {email}
        </p>
      </div>
    );
  }