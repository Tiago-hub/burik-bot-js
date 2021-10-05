const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Get user info.'),
	async execute(interaction) {
        await interaction.reply('User info.');
	},
};