import './Footer.css';
import mastercard from '../../../assets/img/payment-methods/mastercard.svg';
import visa from '../../../assets/img/payment-methods/visa.svg';
import paypal from '../../../assets/img/payment-methods/paypal.svg';
import twint from '../../../assets/img/payment-methods/twint.svg';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../../app/App';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer-container">
			<div className="content-container">
				<div className="identity-container">
					<Link to="/">{APP_NAME}</Link>

					<p>
						Beauty Babe is the place where everyone can discover the beauty that highlights their
						individuality. We're waiting just for you!
					</p>
				</div>

				<div className="info-container">
					{/* Column impresium */}
					<div className="info-section impresium">
						<div className="info-title">Impresisum</div>

						<div className="info-blocks-container">
							<div className="info-block">
								<div className="info-block-title">Vertreten durch</div>
								<div className="info-block-data">Van Huong Cong Thi</div>
							</div>

							<div className="info-block">
								<div className="info-block-title">Konkakt</div>
								<div className="info-block-data">
									<div>Tel. +41 55 420 10 60</div>
									<div>Email. Vanhuongcongthi@web.de</div>
								</div>
							</div>

							<div className="info-block">
								<div className="info-block-title">Registernummer</div>
								<div className="info-block-data">UID: CH-130.4.028.686-6</div>
							</div>
						</div>
					</div>

					{/* Column location */}
					<div className="info-section location">
						<div className="info-title">Geschäft</div>

						<div className="info-blocks-container">
							<div className="info-block">
								<div className="info-block-title">Beauty Babe</div>
								<div className="info-block-data">
									<p>
										Talstrasse 31, Erdgeschoss, <br />
										8808 Pfaffikon <br />
										Tel. 055 420 10 60
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Column payment methods */}
					<div className="info-section payment">
						<div className="info-title">Zahlungsarten</div>

						<div className="info-blocks-container">
							<div className="payment-method">
								<img src={mastercard} alt="Mastercard" />
							</div>
							<div className="payment-method">
								<img src={visa} alt="Visa" />
							</div>
							<div className="payment-method">
								<img src={paypal} alt="Paypal" />
							</div>
							<div className="payment-method">
								<img src={twint} alt="Twint" />
							</div>
						</div>
					</div>

					{/* Column work hours */}
					<div className="info-section shifts">
						<div className="info-title">Öffnungszeiten</div>

						<div className="info-blocks-container">
							<div className="info-block">
								<div className="info-block-data">
									<p>
										Mo - Fr 9:00 - 19:00 <br />
										Sa 9:00 - 16:00 <br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright-container">
				© {currentYear} Pro Nails & Beauty. Proudly developed and maintained by R16a
			</div>
		</div>
	);
}
