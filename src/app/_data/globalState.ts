import { atom } from 'recoil';

interface User {
	id: number;
	name: string;
}

export const themeAtom = atom({
	key: 'themeAtom',
	default: 'light' as 'light' | 'dark', // Type your theme options
});

export const userAtom = atom({
	key: 'userAtom',
	default: null as User | null, // Define your user interface
});
