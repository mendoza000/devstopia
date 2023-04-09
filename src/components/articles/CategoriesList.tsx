import React from "react";
import { FiGrid } from "react-icons/fi";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = () => {
	return (
		<div className="min-w-[20rem] lg:ml-auto flex flex-col gap-5 relative z-10">
			<div className="flex items-center gap-2">
				<FiGrid className="w-5 h-5 text-green-400" />
				<h3 className="text-xl font-semibold">Categorias</h3>
			</div>
			<div className="flex flex-col gap-3 px-10 py-6 duration-200 bg-gray-200 bg-opacity-50 border border-opacity-50 dark:bg-slate-900 rounded-2xl border-slate-700 dark:bg-opacity-20 ">
				<CategoriesListItem name="Ver todos" />
				<CategoriesListItem name="Desarrollo web" />
				<CategoriesListItem name="Scripting" />
				<CategoriesListItem name="Backend" />
				<CategoriesListItem name="Javascript" />
				<CategoriesListItem name="Nextjs" />
				<CategoriesListItem name="Reactjs" />
				<CategoriesListItem name="Golang" />
				<CategoriesListItem name="Personal" />
			</div>
		</div>
	);
};

export default CategoriesList;
