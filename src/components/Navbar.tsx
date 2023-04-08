import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./navbar/Button";
import { useEffect, useState } from "react";

function Navbar() {
	const [iconTheme, setIconTheme] = useState(<FiSun className="w-5 h-5" />);

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	const handleChangeTheme = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			setIconTheme(<FiMoon className="w-5 h-5" />);
			return;
		}

		document.documentElement.classList.add("dark");
		setIconTheme(<FiSun className="w-5 h-5" />);
	};
	return (
		<nav className="absolute flex items-center justify-around min-w-full top-5">
			<div className="px-4 py-3 border opacity-0">
				<FiMoon className="w-5 h-5" />
			</div>

			<ul className="hidden gap-2 px-5 py-3 border border-green-500 lg:flex dark:border-green-400 dark:border-opacity-50 rounded-3xl ">
				<Button title="Inicio" url="/" />
				<Button title="Portafolio" url="/" />
				<Button title="Stack" url="/" />
				<Button title="Inicio" url="/" />
			</ul>

			<button
				className="flex items-center justify-center px-4 py-3 text-gray-600 duration-200 border btn btn-outline border-slate-700 rounded-2xl hover:bg-slate-800 hover:bg-opacity-20"
				onClick={handleChangeTheme}
			>
				{iconTheme}
			</button>
		</nav>
	);
}

export default Navbar;
