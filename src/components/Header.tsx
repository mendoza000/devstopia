import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

function Header() {
	return (
		<header className="flex flex-col gap-5 px-10 py-10 lg:py-32 lg:px-44">
			<div className="h-10 bg-green-400 w-14 rounded-xl"></div>
			<div>
				<h1 className="text-3xl font-extrabold">Devstopia</h1>
				<span className="italic opacity-50">Por: Omar Mendoza</span>
			</div>
			<p className="relative z-10 max-w-xl text-lg opacity-70">
				Como desarrollador web he estado enfocado en esta rama del desarrollo
				desde 2020. Después de tres años, me encontré sin ideas para nuevos
				proyectos y con ganas de mejorar mi habilidad para escribir, así que
				decidí crear un blog. A través de él, quiero compartir mis conocimientos
				y experiencias en el campo del desarrollo, y dejarlos en el infinito
				mundo de internet para que otros puedan beneficiarse de ellos.
			</p>

			<div className="flex items-center gap-3">
				<a
					href="https://github.com/mendoza000"
					target="_blank"
					className="flex items-center justify-center px-4 py-3 text-gray-600 duration-200 border btn btn-outline border-slate-700 rounded-2xl hover:bg-slate-800 hover:bg-opacity-20"
				>
					<FiGithub className="w-5 h-5" />
				</a>

				<a
					href="https://twitter.com/mendoza000x"
					target="_blank"
					className="flex items-center justify-center px-4 py-3 text-gray-600 duration-200 border btn btn-outline border-slate-700 rounded-2xl hover:bg-slate-800 hover:bg-opacity-20"
				>
					<FiTwitter className="w-5 h-5" />
				</a>

				<a
					href="https://linkedin.com/in/mendoza000"
					target="_blank"
					className="flex items-center justify-center px-4 py-3 text-gray-600 duration-200 border btn btn-outline border-slate-700 rounded-2xl hover:bg-slate-800 hover:bg-opacity-20"
				>
					<FiLinkedin className="w-5 h-5" />
				</a>
			</div>

			<div className="absolute w-[50vw] h-[30vh] bg-green-400 bottom-10 right-10 blur-[15rem] dark:bg-opacity-50"></div>
		</header>
	);
}

export default Header;
