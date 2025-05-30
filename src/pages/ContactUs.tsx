import CircularButton from "../components/ui/CircularButton";
import AccordionTest from "../components/AccordionTest";
import "../styles/pages/contactUs.scss";
import GoogleMap from "../components/GoogleMap";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us-section">
        <GoogleMap></GoogleMap>
        <div className="contact-us-upper">
          <p className="contact-us-header">Vanliga Frågor</p>
          <div>
            <AccordionTest header="Hitta hit">
              <p>Hitta hit (Mer info från maggan)</p>
            </AccordionTest>
            <AccordionTest header="Incheckning/Utcheckning">
              <p>
                På Hotell Västerås gäller incheckning från klockan 15.00 och
                utcheckning sker senast klockan 12.00. För sen utcheckning
                vänligen välj det som tillval vid bokningen. Om du har frågor
                angående sen utcheckning, vänligen kontakta receptionen.
              </p>
            </AccordionTest>
            <AccordionTest header="Öppetider">
              <div>
                <p>Receptionens öppettider: </p>
                <p>Måndag - Torsdag 06.00 - 20.00</p>
                <p>Fredag 06.00 - 15.00</p>
                <p>Lördag - Söndag 07.30 - 12.00</p>
                <p>
                  Övriga tider enkel incheckning med kod som du får av
                  receptionen eller via sms.
                </p>
              </div>
            </AccordionTest>
          </div>
        </div>
        <div className="contact-us-lower">
          <p>
            Vid övriga frågor eller om ni har förfrågningar på grupper eller
            speciella önskemål hör av er till oss via e-post eller telefon som
            ni hittar här nedanför.
          </p>
          <p> Varmt välkomna!</p>
        </div>
        <CircularButton />
      </section>
    </>
  );
};

export default ContactUs;
