import styles from "./order.module.css";
import { FaWhatsapp } from "react-icons/fa";
import {useState} from "react";


const marketOptions = ['Option 1', 'Option 2', 'Option 3'];
const Order = () => {
    const [selectedOption, setSelectedOption] = useState(""); // State to manage selected option

    const handleSelectChange = (event:any) => {
        setSelectedOption(event.target.value); // Update selected option
    };

    const handleContinue = () => {
        if (selectedOption) {
            const message = `I'm interested in ${selectedOption}!`; // Custom WhatsApp message
            const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`; // WhatsApp link with the message

            // Open WhatsApp link in a new tab/window
            window.open(whatsappLink, "_blank");
        }
    };
  return (
      <div className={styles.app}>
          <h1>
              Flexible grocery shopping and delivery
          </h1>
          <p>Find a the shop, market or supermarket from your local market.</p>

          <select className={styles.select} value={selectedOption} onChange={handleSelectChange} >
              {marketOptions.map((option, index) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
              ))}
          </select>

          <button className={styles.button} onClick={handleContinue}>
              <span>
                Continue
              </span>
              <FaWhatsapp />
          </button>

      </div>
  )
}

export default Order;