export interface ListProps {
	lesson: {
		id: number;
		name: string;
		chapters: {
			id: number;
			name: string;
		}[];
	};
}

const sampleLessons: ListProps[] = [
	{
		lesson: {
			id: 1,
			name: 'Theory',
			chapters: [
				{ id: 101, name: 'Introduction' },
				{ id: 102, name: 'Basic Concepts' },
				{ id: 103, name: 'Advanced Concepts' },
			],
		},
	},
	{
		lesson: {
			id: 2,
			name: 'Practical',
			chapters: [
				{ id: 201, name: 'Setup' },
				{ id: 202, name: 'Configuration' },
				{ id: 203, name: 'Deployment' },
			],
		},
	},
];

export default sampleLessons;
