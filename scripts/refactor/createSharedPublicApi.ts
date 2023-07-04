import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sourceFiles = project.getSourceFiles();
const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDir = project.getDirectory(sharedUiPath);
const sharedComponentsDirs = sharedUiDir?.getDirectories();

sharedComponentsDirs?.forEach((dir) => {
    const indexPath = dir.getPath() + '/index.ts';
    const indexFile = dir.getSourceFile(indexPath);

    if (!indexFile) {
        const source = `export * from './${dir.getBaseName()}'`;
        const file = dir.createSourceFile(indexPath, source, {
            overwrite: true,
        });

        file.save();
    }
});

const isAbsolute = (path: string) => {
    const layers = ['pages', 'app', 'entity', 'feutures', 'shared', 'widgets'];

    return layers.some((layer) => path.startsWith(`@/${layer}`));
};

sourceFiles.forEach((sourceFile) => {
    const imports = sourceFile.getImportDeclarations();

    imports.forEach((value) => {
        const path = value.getModuleSpecifierValue();
        const pathWithoutAlias = path.replace('@/', '');

        const segments = pathWithoutAlias.split('/');

        const isShared = segments[1] === 'shared';
        const isUi = segments[2] === 'ui';

        if (isAbsolute(path) && isShared && isUi) {
            const result = segments.slice(1, 3).join('/');

            value.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
