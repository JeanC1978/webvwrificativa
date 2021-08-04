import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//components
import Modal from 'react-bootstrap/Modal';
import { ActiveLink } from './ActiveLink';
import { CustomModal } from './Modal';

//images
import arrowDown from '../public/images/menu-icons/arrow-down.svg';
import menuIco from '../public/images/menu-icons/hamburger_ico.svg';
import fiveIco from '../public/images/menu-icons/five_icon.svg';
import verificacionLink from '../public/images/menu-icons/verificacion_link.svg';
import evaluativaLink from '../public/images/menu-icons/evaluativa_link.svg';
import seleccionLink from '../public/images/menu-icons/seleccion_link.svg';

//CSS: navbar.scss

const MENU_LIST = [
	{ id: 'inicio', name: 'Inicio', submenu: false, path: '/' },
	{ id: 'five', name: 'Five', submenu: true, path: '/five' },
	{ id: 'consultiva', name: 'Consultiva', submenu: false, path: '/consultiva' },
	{ id: 'operativa', name: 'Operativa', submenu: false, path: 'https://www.operativa.pe/' },
	{ id: 'blog', name: 'Blog', submenu: false, path: '/blog' },
];
const MENU_LIST_MOVIL = [
	{ id: 'inicio', name: 'Inicio', submenu: false, path: '/' },
	{ id: 'verificacion', name: 'Verificación', submenu: false, path: '/verificacion' },
	{ id: 'evaluativa', name: 'Evaluativa', submenu: false, path: '/evaluativa' },
	{ id: 'seleccion', name: 'Seleccion', submenu: false, path: '/seleccion' },
	{ id: 'consultiva', name: 'Consultiva', submenu: false, path: '/consultiva' },
	{ id: 'operativa', name: 'Operativa', submenu: false, path: 'https://www.operativa.pe/' },
	{ id: 'blog', name: 'Blog', submenu: false, path: '/blog' },
];

const SUB_MENU_LIST = [
	{
		id: 'verificacion',
		name: 'Verificación',
		path: '/verificacion',
		img: verificacionLink,
	},
	{
		id: 'evaluativa',
		name: 'Evaluativa',
		path: '/evaluativa',
		img: evaluativaLink,
	},
	{
		id: 'seleccion',
		name: 'Seleccion',
		path: '/seleccion',
		img: seleccionLink,
	},
];

export function Menu() {
	const [showModal, setShowModal] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const hanldeShowModal = () => {
		setShowModal(true);
	}

	const handleClickMenu = () => {
		setShowMenu(prevState => !prevState)
	}

	const bodyModal = () => (
		<Modal.Body>
			<div className="modalBody">
				<div className="modalBody__description">
					<Image src={fiveIco} alt="five logo"></Image>
					<p>
						Plataforma digital para tus procesos de selección, verificación y
						evaluación de personas.
					</p>
				</div>
				{SUB_MENU_LIST.map((item) => (
					<div className={`modalBody__item menu-${item.id}`} key={item.id}>
						<Link href={item.path}>
							<a>
								<Image src={item.img} alt="Link"></Image>
							</a>
						</Link>
					</div>
				))}
			</div>
		</Modal.Body>
	);

	const getLink = (item) => {
		switch (item.id) {
			case "five":
				return (<div className="btn_five" onClick={hanldeShowModal}>
					<span>{item.name}</span>
					<Image src={arrowDown} alt="ver submenu"></Image>
				</div>)
			case "operativa":
				return (
					<Link href={item.path}>
						<a target="_blank" rel="noopener noreferrer">{item.name}</a>
					</Link>
				)
			default:
				return (
					<Link href={item.path}>
						<a>{item.name}</a>
					</Link>
				)
		}
	}

	return (
		<div className="container-menuList">
			<ul className={`menuList ${showMenu ? "show_menu" : ""}`}>
				{
					showMenu ?
						MENU_LIST_MOVIL.map((item) => (
							<ActiveLink key={item.id} path={item.path}>
								{
									getLink(item)
								}
							</ActiveLink>
						)) :
						MENU_LIST.map((item) => (
							<ActiveLink key={item.id} path={item.path}>
								{
									getLink(item)
								}
								{/* {
									item.id === "five" ? (
										<div className="btn_five" onClick={hanldeShowModal}>
											<span>{item.name}</span>
											<Image src={arrowDown} alt="ver submenu"></Image>
										</div>
									) : (item.id === "operativa" ? (
										<Link href={item.path}>
											<a target="_blank" rel="noopener noreferrer">{item.name}</a>
										</Link>
									) :
										<Link href={item.path}>
											<a>{item.name}</a>
										</Link>
									)
								} */}
							</ActiveLink>
						))
				}
			</ul>
			<span className="btn_menu" onClick={handleClickMenu}>
				<Image src={menuIco} alt="Menu"></Image>
			</span>
			<CustomModal
				showModal={showModal}
				dialogClassName="modal-lg"
				contentClassName="menu-modal"
				handleClose={() => setShowModal(false)}
			>
				{bodyModal()}
			</CustomModal>
		</div>
	);
}
