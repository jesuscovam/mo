/** @typedef {{version: string, name: string }} PackageJson */

/**
 * @param {PackageJson} metadata
 * @returns {PackageJson}
 */
export function bumpVersion(metadata) {
	const versiones = metadata.version.split('.');
	const patch_version = Number(metadata.version.split('.')[versiones.length - 1]);
	const next_patch = patch_version + 1;
	const nueva_version = versiones.slice(0, versiones.length - 1).join('.') + '.' + next_patch;

	metadata.version = nueva_version;
	return metadata;
}
