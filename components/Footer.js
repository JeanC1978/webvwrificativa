import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import fb from '../public/images/footer/fb.svg';
import linkedin from '../public/images/footer/lnkin.svg';
import youtube from '../public/images/footer/youtube.svg';
import logo_foot from '../public/images/footer/logo_foot.svg';
import call_ico from '../public/images/footer/call_ico.svg';
import home_ico from '../public/images/footer/home_ico.svg';
import mail_ico from '../public/images/footer/mail_ico.svg';
export function Footer(props) {
	const router = useRouter();

	const handleGoBack = () => {
		router.back();
	};

	return (
		<div className="footer">
			<div className="logo-f">
				<Image
					src={logo_foot}
					alt="verificativa"
					width={100}
					automatically
					provided
					height={50}
					provided
				/>
			</div>

			<div className="slogan">
				Elegir personal confiable, no es <br></br> cuestión de suerte
			</div>
			<div className="redes">
				<a href="https://www.facebook.com/VerificativaSAC/" target="_blank" rel="noopener noreferrer">
					<Image
						src={fb}
						alt="facebook"
						width={50}
						automatically
						provided
						height={50}
						provided
					/>
				</a>

				<a
					href="https://www.linkedin.com/company/verificativa-sac/?originalSubdomain=pe"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={linkedin}
						alt="linkedin"
						width={50}
						automatically
						provided
						height={50}
						provided
					/>
				</a>

				<a
					href="https://www.youtube.com/channel/UC0EinzTeh6T6kU0kaNvqGPw/featured"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={youtube}
						alt="youtube"
						width={50}
						automatically
						provided
						height={50}
						provided
					/>
				</a>
			</div>
			<div className="containersecciones">
				<ul className="secciones">
					<li className="Ini" onClick={() => router.push('/')}>
						Inicio
					</li>
					<li className="Five">
						Five
						<ul className="t-thin" onClick={() => router.push('/seleccion')}>
							Selección
						</ul>
						<ul className="t-thin" onClick={() => router.push('/verificacion')}>
							Verificación
						</ul>
						<ul className="t-thin" onClick={() => router.push('/evaluativa')}>
							Evaluativa
						</ul>
					</li>
					<li className="Cons" onClick={() => router.push('/consultiva')}>
						Consultiva
					</li>
					<li className="t-bold">
						<a href="https://www.operativa.pe/" target="_blank">
							Operativa
						</a>
					</li>
					<li className="t-bold" onClick={() => router.push('/blog')}>
						Blog
					</li>
				</ul>
			</div>

			<div className="contactoymail">
				<div className="dcontact">
					Datos de contacto
					<div className="ico_inline">
						<Image
							src={call_ico}
							alt="call_ico"
							width={25}
							automatically
							provided
							height={25}
							provided
						/>

						<ul className="t-thin">(01) 247-2829 / 923 890 165</ul>
					</div>
					<div className="ico_inline">
						<Image
							className="margin_ico"
							src={home_ico}
							alt="home_ico"
							width={25}
							automatically
							provided
							height={25}
							provided
						/>

						<ul className="t-thin">Jr. Alfonso Ugarte 235, Of.103, Barranco</ul>
					</div>
				</div>
			</div>
			<div className="mail">
				<Image
					className="margin_ico"
					src={mail_ico}
					alt="mail_ico"
					width={25}
					automatically
					provided
					height={25}
					provided
				/>

				<ul className="t-thin">
					<a href="mailto:info@verificativa.com">comercial@verificativa.com</a>
				</ul>
			</div>
		</div>
	);
}
