import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/lib/i18n/i18n';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/**
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    const content = <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;

    return createPortal(content, element);
};
