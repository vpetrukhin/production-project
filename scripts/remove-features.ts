import {
    JsxSelfClosingElement,
    Project,
    SyntaxKind,
    JsxAttribute,
    Node,
} from 'ts-morph';

const featureName = process.argv[2];
const featureState = process.argv[3];

const project = new Project({});

// project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/ArticlesDetailsPage.tsx');

const sourceFiles = project.getSourceFiles();

const ToggleFeatureComponentName = 'ToggleFeatureComponent';
function isToggleComponent(node: JsxSelfClosingElement): boolean {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === ToggleFeatureComponentName;
}

function getAttrributeByName(attributes: JsxAttribute[], searchName: string) {
    return attributes.find((item) => item.getName() === searchName);
}

function replaceToggleComponent(node: JsxSelfClosingElement) {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const featureNameAttribute = getAttrributeByName(attributes, 'name');
    const OnComponent = getAttrributeByName(attributes, 'on');
    const OffComponent = getAttrributeByName(attributes, 'off');

    const featureNameValue = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureNameValue !== featureName) {
        return;
    }

    const OnValue = OnComponent?.getFirstDescendantByKind(
        SyntaxKind.JsxExpression,
    )
        ?.getExpression()
        ?.getText();
    const OffValue = OffComponent?.getFirstDescendantByKind(
        SyntaxKind.JsxExpression,
    )
        ?.getExpression()
        ?.getText();

    if (featureState === 'on' && OnValue) {
        console.log('Включаем фичу ' + featureName);
        node.replaceWithText(OnValue);
    }

    if (featureState === 'off' && OffValue) {
        console.log('Выключаем фичу ' + featureName);
        node.replaceWithText(OffValue);
    }
}

sourceFiles.forEach((file) => {
    file.forEachDescendant((node) => {
        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceToggleComponent(node);
        }
    });
});

project.save();
