export interface Mode {
	backgroundColor: string;
	textColor: string;
	buttonBackgroundColor: string;
}

export const lightTheme: Mode = {
	backgroundColor: '#FFF',
	textColor: '#1D1D1D',
	buttonBackgroundColor: 'rgb(233, 234, 235)',
};

export const darkTheme: Mode = {
	backgroundColor: '#1D1D1D',
	textColor: '#FFF',
	buttonBackgroundColor: 'rgb(41, 41, 41)',
};