import fs from 'fs';

console.log('reverting name to ui');
fs.readFile('package.json', function (err, content) {
	if (err) throw err;
	/**@type {{ version: string, name: string }} */
	const metadata = JSON.parse(content);
	metadata.name = 'ui';
	fs.writeFile('package.json', JSON.stringify(metadata, null, 2), function (err) {
		if (err) throw err;
	});
});
