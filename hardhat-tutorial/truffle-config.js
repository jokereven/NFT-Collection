const MY_API_KEY = process.env.MY_API_KEY;

module.exports = {
	api_keys: {
		etherscan: MY_API_KEY,
	},

	plugins: ['truffle-plugin-verify'],
};
