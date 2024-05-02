import fs from 'fs';

export const getUsage = () => {
	const usage = fs.readFileSync('./data/usage.md', 'utf8');
	return usage;
}

export const generateStaticParams = () => {
	return {
		props: {
			usage: getUsage()
		}
	};
};
