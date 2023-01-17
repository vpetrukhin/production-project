import { login } from './commands/login';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Cypress.Commands.add('login', login);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): void
        }
    }
}