import React from "react";
//element imports
interface ICategory {
	category: string;
	elements: { name: string; element: React.ReactNode }[];
}
//element list
const elements: ICategory[] = [
	{
		category: "category1",
		elements: [
			{ name: "element1", element: <div> element1 </div> },
			{
				name: "element2",
				element: (
					<div className="navbar bg-base-100">
						<a className="btn-ghost btn text-xl normal-case">daisyUI</a>
					</div>
				),
			},
		],
	},
	{
		category: "category2",
		elements: [
			{
				name: "element1",
				element: (
					<div className="navbar bg-base-100">
						<div className="flex-none">
							<button className="btn-ghost btn-square btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-5 w-5 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</button>
						</div>
						<div className="flex-1">
							<a className="btn-ghost btn text-xl normal-case">daisyUI</a>
						</div>
						<div className="flex-none">
							<button className="btn-ghost btn-square btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-5 w-5 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				),
			},
		],
	},
];
export default elements;
