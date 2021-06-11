export class GetAllCollectibles {

	exec(): Collectibles[] {
		return [
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
			{
				url: 'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80',
				title:'Lorem ipsum'
			},
		];
	}
}

export interface Collectibles {
	url: string;
	title: string;
}