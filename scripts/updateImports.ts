import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sourceFiles = project.getSourceFiles();

const isAbsolute = (path: string) => {
    const layers = ['pages', 'app', 'entity', 'feutures', 'shared', 'widgets'];

    return layers.some(layer => path.startsWith(layer));
};

sourceFiles.forEach(sourceFile => {
    const imports = sourceFile.getImportDeclarations();

    imports.forEach((value) => {
        const path = value.getModuleSpecifierValue();

        if (isAbsolute(path)) {
            value.setModuleSpecifier(`@/${path}`);
        }
    });
});


project.save();