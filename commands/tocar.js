const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tocar')
		.setDescription('Toca a música pedida'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};