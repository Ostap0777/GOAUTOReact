export interface Cars {
		id: string;
		name: string;
		model: string;
		year: string;
		run: string;
		engine: string;
		transmission: string;
		photo: string;
		price: string;
		fuel?: string;
		price1?:string;
		price2?:string;
		price3?:string;
}


export interface FormState {
	name: string,
	email: string,
	phone: string,
	text: string,
	errors: FormErrors
}

export interface FormErrors {
   name?:string,
	email?:string,
	phone?:string,
	text?:string,
}