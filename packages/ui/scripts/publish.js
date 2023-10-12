import fs from 'fs';
import { bumpVersion } from './utils';

console.log('Incrementing build number...');
fs.readFile('package.json', function (err, content) {
	if (err) throw err;
	/**@type {{ version: string, name: string }} */
	let metadata = JSON.parse(content);
	metadata = bumpVersion(metadata);
	metadata.name = '@mouizard/svelte';
	fs.writeFile('package.json', JSON.stringify(metadata, null, 2), function (err) {
		if (err) throw err;
		console.log(`Current monorepo build number: ${metadata.version}`);
	});
});
